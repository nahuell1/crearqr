"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { TextFormData } from '@/types/qr-types';

interface TextGeneratorProps {
  onSubmit: (data: TextFormData) => void;
}

const TextGenerator: React.FC<TextGeneratorProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<TextFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="text" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Texto
        </label>
        <textarea
          id="text"
          rows={4}
          placeholder="Ingresá el texto que querés convertir en QR"
          {...register("text", { 
            required: "El texto es requerido",
            maxLength: {
              value: 500,
              message: "El texto no puede exceder los 500 caracteres"
            }
          })}
          className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.text && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.text.message}</p>
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

export default TextGenerator;
