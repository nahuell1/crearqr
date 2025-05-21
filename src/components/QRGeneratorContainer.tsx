"use client";

import React, { useState } from 'react';
import { QRGeneratorType, QRFormData } from '@/types/qr-types';
import { generateQRData } from '@/utils/qr-utils';

// Importamos todos los generadores
import URLGenerator from '@/components/qr-generators/URLGenerator';
import TextGenerator from '@/components/qr-generators/TextGenerator';
import EmailGenerator from '@/components/qr-generators/EmailGenerator';
import SMSGenerator from '@/components/qr-generators/SMSGenerator';
import WiFiGenerator from '@/components/qr-generators/WiFiGenerator';
import WhatsAppGenerator from '@/components/qr-generators/WhatsAppGenerator';
import QRTypeSelector from '@/components/QRTypeSelector';
import QRDisplay from '@/components/QRDisplay';

const QRGeneratorContainer: React.FC = () => {
  // Estado para el tipo de QR seleccionado
  const [selectedType, setSelectedType] = useState<QRGeneratorType>('url');
  
  // Estado para almacenar el QR generado
  const [qrCodeDataURL, setQRCodeDataURL] = useState<string | null>(null);
  
  // Estado para controlar el proceso de generación
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  
  // Estado para manejar errores
  const [error, setError] = useState<string | null>(null);

  // Función para manejar la generación del QR
  const handleGenerateQR = async (formData: QRFormData) => {
    setIsGenerating(true);
    setError(null);
    
    try {
      const dataURL = await generateQRData(selectedType, formData);
      setQRCodeDataURL(dataURL);
    } catch (err) {
      console.error('Error al generar el código QR:', err);
      setError('No se pudo generar el código QR. Por favor, verificá los datos ingresados.');
    } finally {
      setIsGenerating(false);
    }
  };

  // Renderizar el componente generador correspondiente según el tipo seleccionado
  const renderGenerator = () => {
    switch (selectedType) {
      case 'url':
        return <URLGenerator onSubmit={handleGenerateQR} />;
      case 'text':
        return <TextGenerator onSubmit={handleGenerateQR} />;
      case 'email':
        return <EmailGenerator onSubmit={handleGenerateQR} />;
      case 'sms':
        return <SMSGenerator onSubmit={handleGenerateQR} />;
      case 'wifi':
        return <WiFiGenerator onSubmit={handleGenerateQR} />;
      case 'whatsapp':
        return <WhatsAppGenerator onSubmit={handleGenerateQR} />;
      default:
        return <div>Seleccioná un tipo de QR</div>;
    }
  };

  // Limpiar el QR generado cuando se cambia el tipo
  const handleTypeChange = (type: string) => {
    setSelectedType(type as QRGeneratorType);
    setQRCodeDataURL(null);
    setError(null);
  };

  return (
    <div className="container mx-auto p-20 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-8">
      <div className="flex flex-col md:flex-row gap-20">
        {/* Selector de tipo de QR */}
        <div className="md:w-1/3">
          <QRTypeSelector currentType={selectedType} onTypeChange={handleTypeChange} />
        </div>
        {/* Generador de QR */}
        <div className="md:w-2/3">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Completá los datos
          </h2>
          <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm">
            {renderGenerator()}
            {error && <p className="text-red-500">{error}</p>}
            <br></br>
            {isGenerating && <p>Generando QR...</p>}
            {qrCodeDataURL && <QRDisplay qrCodeDataURL={qrCodeDataURL} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRGeneratorContainer;
