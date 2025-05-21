import QRGeneratorContainer from "@/components/QRGeneratorContainer";
import { FaGithub, FaQrcode, FaMobileAlt, FaRegLightbulb } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner superior con gradiente */}
      <div className="header-gradient text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Crear QR</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Generá y descargá tu código QR, <strong>¡sin vueltas!</strong>
          </p>
        </div>
      </div>

      {/* Sección principal del generador */}
      <main id="generator" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <QRGeneratorContainer />
      </main>

      {/* Pie de página */}
      <footer className="mt-auto py-8 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <FaQrcode className="text-indigo-600 dark:text-indigo-400 text-2xl mr-2" />
              <span className="font-semibold text-gray-800 dark:text-gray-200">Crear QR</span>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Crear QR - hecho por <strong><a href="https://ndev.com.ar" target="_blank" rel="noopener noreferrer" className="text-sm link-hover items-center">ndev</a></strong>
            </p>
            
            <div className="flex space-x-6">
              <a
                href="https://ndev.com.ar/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm link-hover"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}