import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

export const metadata: Metadata = {
  title: "Crear QR - Generador de Códigos QR",
  description: "Una herramienta web para generar códigos QR para URLs, texto, email, SMS, WiFi y WhatsApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${GeistSans.className} antialiased bg-gray-50 dark:bg-gray-900 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
