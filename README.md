# Crear QR - Generador de Códigos QR

Una aplicación web moderna para generar códigos QR de forma rápida y sencilla para diferentes propósitos como URLs, texto, email, SMS, WiFi y WhatsApp.

## Características

- 🚀 Interfaz de usuario moderna y atractiva
- 🎨 Diseño responsive
- 📱 Generá códigos QR para múltiples propósitos:
  - URLs
  - Texto
  - Email
  - SMS
  - WiFi
  - WhatsApp
- 💾 Descargá los códigos QR generados como imágenes PNG
- ⚡ Desarrollado con Next.js y React para un rendimiento óptimo
- 🎭 Arquitectura modular para facilitar la extensión con nuevos tipos de QR

## Tecnologías utilizadas

- [Next.js](https://nextjs.org/) - Framework de React
- [TypeScript](https://www.typescriptlang.org/) - Para un desarrollo con tipado estático
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [QRCode](https://github.com/soldair/node-qrcode) - Generación de códigos QR

## Instalación y uso

1. Cloná este repositorio:
```bash
git clone https://github.com/nahuell1/crearqr.git
cd crearqr
```

2. Instalá las dependencias:
```bash
npm install
```

3. Ejecutá el servidor de desarrollo:
```bash
npm run dev
```

4. Abrí [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Construcción para producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Para iniciar la versión de producción localmente:

```bash
npm start
```

## Despliegue

Esta aplicación está configurada para ser desplegada fácilmente en [Vercel](https://vercel.com). Simplemente conectá tu repositorio de GitHub a Vercel y la plataforma se encargará del resto.

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.
