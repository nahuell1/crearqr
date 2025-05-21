export type QRGeneratorType = 
  | 'url' 
  | 'text' 
  | 'email' 
  | 'sms' 
  | 'wifi' 
  | 'whatsapp';

export interface QRGeneratorOption {
  id: QRGeneratorType;
  label: string;
  icon: string; // Este será el nombre del ícono de react-icons
  description: string;
}

// Interfaces para los formularios de cada tipo de QR
export interface URLFormData {
  url: string;
}

export interface TextFormData {
  text: string;
}

export interface EmailFormData {
  email: string;
  subject?: string;
  body?: string;
}

export interface SMSFormData {
  phoneNumber: string;
  message?: string;
}

export interface WiFiFormData {
  ssid: string;
  password?: string;
  encryption: 'WEP' | 'WPA' | 'nopass';
  hidden: boolean;
}

export interface WhatsAppFormData {
  phoneNumber: string;
  message?: string;
}

// Tipo para todas las formas de datos posibles
export type QRFormData = 
  | URLFormData 
  | TextFormData 
  | EmailFormData 
  | SMSFormData 
  | WiFiFormData 
  | WhatsAppFormData;
