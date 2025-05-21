import QRCode from 'qrcode';
import { 
  URLFormData, 
  TextFormData, 
  EmailFormData, 
  SMSFormData, 
  WiFiFormData, 
  WhatsAppFormData,
  QRGeneratorType,
  QRFormData
} from '../types/qr-types';

// Interface for QR Code Options
interface QRCodeOptions {
  margin?: number;
  width?: number;
  color?: {
    dark: string;
    light: string;
  };
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
}

// Default QR Code styling options
const defaultQROptions: QRCodeOptions = {
  margin: 1,
  width: 300,
  color: {
    dark: '#000000',
    light: '#ffffff',
  },
  errorCorrectionLevel: 'M' // 'M' provides good balance between size and error correction
};

// Función para generar datos para diferentes tipos de códigos QR
export const generateQRData = async (
  type: QRGeneratorType, 
  formData: QRFormData,
  options: QRCodeOptions = defaultQROptions
): Promise<string> => {
  let qrData = '';

  switch (type) {
    case 'url':
      qrData = (formData as URLFormData).url;
      break;
    case 'text':
      qrData = (formData as TextFormData).text;
      break;
    case 'email':
      const emailData = formData as EmailFormData;
      qrData = `mailto:${emailData.email}`;
      if (emailData.subject) qrData += `?subject=${encodeURIComponent(emailData.subject)}`;
      if (emailData.body) qrData += `${emailData.subject ? '&' : '?'}body=${encodeURIComponent(emailData.body)}`;
      break;
    case 'sms':
      const smsData = formData as SMSFormData;
      qrData = `sms:${smsData.phoneNumber}`;
      if (smsData.message) qrData += `?body=${encodeURIComponent(smsData.message)}`;
      break;
    case 'wifi':
      const wifiData = formData as WiFiFormData;
      qrData = `WIFI:S:${wifiData.ssid};T:${wifiData.encryption};`;
      if (wifiData.password) qrData += `P:${wifiData.password};`;
      if (wifiData.hidden) qrData += 'H:true;';
      qrData += ';';
      break;
    case 'whatsapp':
      const whatsAppData = formData as WhatsAppFormData;
      qrData = `https://wa.me/${whatsAppData.phoneNumber.replace(/[^0-9]/g, '')}`;
      if (whatsAppData.message) qrData += `?text=${encodeURIComponent(whatsAppData.message)}`;
      break;
    default:
      throw new Error(`Tipo de QR no soportado: ${type}`);
  }

  try {
    // Genera el código QR como URL de datos
    const qrCodeDataURL = await QRCode.toDataURL(qrData, {
      ...defaultQROptions,
      ...options
    });
    return qrCodeDataURL;
  } catch (error) {
    console.error('Error generando el código QR:', error);
    throw new Error('No se pudo generar el código QR');
  }
};

// Función para descargar el código QR como imagen PNG
export const downloadQRCode = (dataUrl: string, fileName: string = 'qrcode'): void => {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = `${fileName}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Función para compartir el código QR (si el navegador lo permite)
export const shareQRCode = async (dataUrl: string, title: string = 'Mi Código QR'): Promise<void> => {
  try {
    // Convertir dataURL a Blob
    const blob = await (await fetch(dataUrl)).blob();
    const file = new File([blob], 'qrcode.png', { type: 'image/png' });
    
    if (navigator.share) {
      await navigator.share({
        title: title,
        text: 'Aquí está mi código QR generado',
        files: [file]
      });
    } else {
      throw new Error('Compartir no está disponible en este navegador');
    }
  } catch (error) {
    console.error('Error al compartir:', error);
    alert('No se pudo compartir el código QR. Prueba descargar la imagen.');
  }
};

// Función para obtener el color predominante o sugerido según el tipo de QR
export const getQRTypeColor = (type: QRGeneratorType): string => {
  switch (type) {
    case 'url': return '#4f46e5'; // Indigo
    case 'text': return '#0ea5e9'; // Sky Blue
    case 'email': return '#8b5cf6'; // Purple
    case 'sms': return '#10b981'; // Emerald
    case 'wifi': return '#f59e0b'; // Amber
    case 'whatsapp': return '#22c55e'; // Green
    default: return '#4f46e5'; // Default indigo
  }
};
