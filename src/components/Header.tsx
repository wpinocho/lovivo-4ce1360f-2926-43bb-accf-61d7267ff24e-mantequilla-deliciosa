import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  console.log("Header rendered with cart items count:", cartItemsCount);

  return (
    <header className="bg-yellow-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl md:text-3xl font-bold">🧈 Mantequilla Dorada</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#productos" className="hover:text-yellow-200 transition-colors">
              Productos
            </a>
            <a href="#sobre-nosotros" className="hover:text-yellow-200 transition-colors">
              Sobre Nosotros
            </a>
            <a href="#contacto" className="hover:text-yellow-200 transition-colors">
              Contacto
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onCartClick}
              className="relative text-white hover:text-yellow-200 hover:bg-yellow-700"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>
            
            <Button variant="ghost" size="sm" className="md:hidden text-white hover:text-yellow-200 hover:bg-yellow-700">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};