"use client";

import React from 'react';
import { QRGeneratorOption } from '@/types/qr-types';
import { FaLink, FaFont, FaEnvelope, FaSms, FaWifi, FaWhatsapp } from 'react-icons/fa';

interface QRTypeSelectorProps {
  currentType: string;
  onTypeChange: (type: string) => void;
}

const QRTypeSelector: React.FC<QRTypeSelectorProps> = ({ currentType, onTypeChange }) => {
  const qrTypes: QRGeneratorOption[] = [
    { 
      id: 'url', 
      label: 'URL', 
      icon: 'FaLink',
      description: 'Generá un código QR para un sitio web o enlace'
    },
    { 
      id: 'text', 
      label: 'Texto', 
      icon: 'FaFont',
      description: 'Convertí cualquier texto en un código QR'
    },
    { 
      id: 'email', 
      label: 'Email', 
      icon: 'FaEnvelope',
      description: 'Creá un código QR para que te envíen un correo electrónico'
    },
    { 
      id: 'sms', 
      label: 'SMS', 
      icon: 'FaSms',
      description: 'Generá un código QR para que te envíen un mensaje de texto'
    },
    { 
      id: 'wifi', 
      label: 'WiFi', 
      icon: 'FaWifi',
      description: 'Compartí tus credenciales de WiFi con un código QR'
    },
    { 
      id: 'whatsapp', 
      label: 'WhatsApp', 
      icon: 'FaWhatsapp',
      description: 'Creá un código QR para que te envíen un WhatsApp'
    },
  ];

  // Función para renderizar el icono correcto según el string
  const renderIcon = (iconName: string, active: boolean) => {
    const className = "w-5 h-5"; // Tamaño uniforme para todos los iconos
    
    switch (iconName) {
      case 'FaLink': return <FaLink className={className} />;
      case 'FaFont': return <FaFont className={className} />;
      case 'FaEnvelope': return <FaEnvelope className={className} />;
      case 'FaSms': return <FaSms className={className} />;
      case 'FaWifi': return <FaWifi className={className} />;
      case 'FaWhatsapp': return <FaWhatsapp className={className} />;
      default: return null;
    }
  };

  return (
    <div className="mt-6 md:w-64 md:mt-0 md:pr-4">
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Tipos de QR</h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        Seleccioná el tipo de código QR que deseas generar
      </p>
      <div className="mt-4 space-y-2">
        {qrTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => onTypeChange(type.id)}
            className={`
              group flex items-center px-4 py-3 text-sm font-medium rounded-lg w-full transition-all duration-200
              ${currentType === type.id
                ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700'
              }
            `}
          >
            <div className={`
              flex items-center justify-center mr-3 w-8 h-8 rounded-md transition-colors
              ${currentType === type.id
                ? 'bg-white/20 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-indigo-500 dark:text-indigo-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30'
              }
            `}>
              {renderIcon(type.icon, currentType === type.id)}
            </div>
            <div className="flex flex-col items-start">
              <span className="font-medium">{type.label}</span>
              {currentType === type.id && (
                <span className="text-xs mt-0.5 text-indigo-100">{type.description}</span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QRTypeSelector;
