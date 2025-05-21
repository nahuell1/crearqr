"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { WhatsAppFormData } from '@/types/qr-types';

interface WhatsAppGeneratorProps {
  onSubmit: (data: WhatsAppFormData) => void;
}

const WhatsAppGenerator: React.FC<WhatsAppGeneratorProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<WhatsAppFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Número de WhatsApp
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-300 text-sm">
            +
          </span>
          <input
            id="phoneNumber"
            type="tel"
            placeholder="541123456789 (sin espacios ni guiones)"
            {...register("phoneNumber", {
              required: "El número de WhatsApp es requerido",
              pattern: {
                value: /^[0-9]+$/,
                message: "Solo números, sin espacios ni caracteres especiales"
              }
            })}
            className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Incluye el código de país (ej. 54 para Argentina)
        </p>
        {errors.phoneNumber && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phoneNumber.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Mensaje predefinido (Opcional)
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="Hola, te contacto desde mi código QR..."
          {...register("message")}
          className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Generar Código QR
        </button>
      </div>
    </form>
  );
};

export default WhatsAppGenerator;
