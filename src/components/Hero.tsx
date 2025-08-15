import { Button } from "@/components/ui/button";

export const Hero = () => {
  console.log("Hero component rendered");

  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          La Mejor Mantequilla Artesanal
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Descubre nuestra selección premium de mantequillas artesanales, 
          elaboradas con los mejores ingredientes naturales para tu mesa.
        </p>
        <Button 
          size="lg" 
          className="bg-white text-yellow-600 hover:bg-yellow-50 text-lg px-8 py-3"
          onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Ver Productos
        </Button>
      </div>
    </section>
  );
};