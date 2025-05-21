import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

export const metadata: Metadata = {
  // Metadatos básicos
  title: {
    default: "Crear QR - Generador de Códigos QR Gratuito",
    template: "%s | Crear QR"
  },
  description: "Generador de códigos QR gratuito y fácil de usar. Crea QR para URLs, texto, WhatsApp, WiFi, email y SMS. Sin registro, sin marcas de agua, descarga instantánea.",
  keywords: ["generador qr", "código qr", "qr gratis", "crear qr", "qr whatsapp", "qr wifi", "qr url", "qr email", "qr sms", "generador códigos qr"],
  
  // Verificación de propiedad
  verification: {
    google: "gM0O1EHQZsCMT1RGU74D4eQIcB6JH4d4MwNpBQdYzmc",
  },

  // Configuración de robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },

  // Configuración de idiomas
  alternates: {
    canonical: "https://crearqr.com.ar",
    languages: {
      'es-AR': 'https://crearqr.com.ar',
    },
  },

  // Metadatos de aplicación
  applicationName: "Crear QR",
  creator: "Crear QR",
  publisher: "Crear QR",
  generator: "Next.js",
  authors: [{ name: "Crear QR", url: "https://crearqr.com.ar" }],
  
  // Configuración de OpenGraph
  openGraph: {
    title: "Crear QR - Generador de Códigos QR Gratuito",
    description: "Generador de códigos QR gratuito y fácil de usar. Crea QR para URLs, texto, WhatsApp, WiFi, email y SMS. Sin registro, sin marcas de agua, descarga instantánea.",
    url: "https://crearqr.com.ar",
    siteName: "Crear QR",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Necesitarás crear esta imagen
        width: 1200,
        height: 630,
        alt: "Crear QR - Generador de Códigos QR",
      },
    ],
  },

  // Configuración de Twitter
  twitter: {
    card: "summary_large_image",
    title: "Crear QR - Generador de Códigos QR Gratuito",
    description: "Generador de códigos QR gratuito y fácil de usar. Crea QR para URLs, texto, WhatsApp, WiFi, email y SMS. Sin registro, sin marcas de agua.",
    images: ["/twitter-image.jpg"], // Necesitarás crear esta imagen
    creator: "@crearqr",
    site: "@crearqr",
  },

  // Metadatos para PWA/Mobile
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  
  // URL base para metadatos
  metadataBase: new URL("https://crearqr.com.ar"),

  // Configuración de manifest para PWA
  manifest: "/manifest.json", // Necesitarás crear este archivo
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
        <Analytics />
      </body>
    </html>
  );
}
