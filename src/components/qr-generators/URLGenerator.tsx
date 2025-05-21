"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { URLFormData } from '@/types/qr-types';

interface URLGeneratorProps {
  onSubmit: (data: URLFormData) => void;
}

const URLGenerator: React.FC<URLGeneratorProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<URLFormData>({
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          URL
        </label>
        <input
          id="url"
          type="text"
          placeholder="https://ejemplo.com"
          {...register("url", { 
            required: "La URL es requerida", 
            pattern: {
              value: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
              message: "Debe ser una URL válida."
            }
          })}
          className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.url && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.url.message}</p>
        )}
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

export default URLGenerator;
