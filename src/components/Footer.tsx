import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => {
  console.log("Footer component rendered");

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              🧈 Mantequilla Dorada
            </h3>
            <p className="text-gray-300 mb-4">
              Desde 1985, elaboramos las mejores mantequillas artesanales 
              con ingredientes naturales y procesos tradicionales.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Calle Principal 123, Ciudad</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@mantequilladorada.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <div>
                  <p>Lun - Vie: 8:00 AM - 6:00 PM</p>
                  <p>Sáb: 9:00 AM - 4:00 PM</p>
                  <p>Dom: Cerrado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Mantequilla Dorada. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};