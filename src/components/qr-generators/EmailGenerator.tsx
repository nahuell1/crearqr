"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { EmailFormData } from '@/types/qr-types';

interface EmailGeneratorProps {
  onSubmit: (data: EmailFormData) => void;
}

const EmailGenerator: React.FC<EmailGeneratorProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<EmailFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Correo Electrónico
        </label>
        <input
          id="email"
          type="email"
          placeholder="ejemplo@correo.com"
          {...register("email", {
            required: "El correo electrónico es requerido",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Correo electrónico inválido"
            }
          })}
          className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Asunto (Opcional)
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Asunto del correo"
          {...register("subject")}
          className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      
      <div>
        <label htmlFor="body" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Cuerpo del Mensaje (Opcional)
        </label>
        <textarea
          id="body"
          rows={4}
          placeholder="Contenido del correo electrónico"
          {...register("body")}
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

export default EmailGenerator;
