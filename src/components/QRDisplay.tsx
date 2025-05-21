"use client";

import React, { useState } from 'react';
import { FaDownload, FaShareAlt } from 'react-icons/fa';
import { downloadQRCode, shareQRCode } from '@/utils/qr-utils';

interface QRDisplayProps {
  qrCodeDataURL: string | null;
  fileName?: string;
}

const QRDisplay: React.FC<QRDisplayProps> = ({ qrCodeDataURL, fileName = 'qrcode' }) => {
  
  if (!qrCodeDataURL) {
    return null;
  }

  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 self-start flex items-center">
        Tu Código QR
      </h3>
      
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 relative group">
        {/* QR Code Image */}
        <img 
          src={qrCodeDataURL} 
          alt="Código QR generado" 
          className="max-w-xs w-full h-auto"
        />
      </div>
      
      <div className="w-full space-y-3">
        <button
          onClick={() => downloadQRCode(qrCodeDataURL, fileName)}
          className="w-full flex items-center justify-center py-2.5 px-4 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-medium transition-all duration-200 shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <FaDownload className="w-4 h-4 mr-2" />
          Descargar QR
        </button>
      </div>
      
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-700 p-4 rounded-lg w-full border border-indigo-100 dark:border-gray-600">
        <p className="text-sm text-indigo-800 dark:text-indigo-300 text-center">
          Escaneá este código con tu celular o descargalo para compartirlo.
        </p>
      </div>
    </div>
  );
};

export default QRDisplay;
