"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { WiFiFormData } from '@/types/qr-types';

interface WiFiGeneratorProps {
  onSubmit: (data: WiFiFormData) => void;
}

const WiFiGenerator: React.FC<WiFiGeneratorProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<WiFiFormData>({
    defaultValues: {
      encryption: 'WPA',
      hidden: false
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="ssid" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Nombre de la Red (SSID)
        </label>
        <input
          id="ssid"
          type="text"
          placeholder="Nombre de tu WiFi"
          {...register("ssid", {
            required: "El nombre de la red es requerido"
          })}
          className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.ssid && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.ssid.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          placeholder="Contraseña de la red WiFi"
          {...register("password")}
          className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      
      <div>
        <label htmlFor="encryption" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Tipo de Seguridad
        </label>
        <select
          id="encryption"
          {...register("encryption")}
          className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="WPA">WPA/WPA2</option>
          <option value="WEP">WEP</option>
          <option value="nopass">Sin contraseña</option>
        </select>
      </div>
      
      <div className="flex items-center">
        <input
          id="hidden"
          type="checkbox"
          {...register("hidden")}
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label htmlFor="hidden" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
          Red oculta
        </label>
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

export default WiFiGenerator;
