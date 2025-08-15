import { ProductCard } from "./ProductCard";
import { Product } from "@/pages/Index";

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const products: Product[] = [
  {
    id: 1,
    name: "Mantequilla Clásica",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=300&fit=crop",
    description: "Mantequilla tradicional cremosa, perfecta para el desayuno",
    category: "Clásica"
  },
  {
    id: 2,
    name: "Mantequilla con Sal Marina",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=300&fit=crop",
    description: "Mantequilla premium con cristales de sal marina",
    category: "Gourmet"
  },
  {
    id: 3,
    name: "Mantequilla de Hierbas",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1571197119282-7c4a2b8d7d8c?w=400&h=300&fit=crop",
    description: "Mezcla aromática con hierbas frescas del jardín",
    category: "Saborizadas"
  },
  {
    id: 4,
    name: "Mantequilla de Ajo",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop",
    description: "Perfecta para panes y carnes, con ajo fresco",
    category: "Saborizadas"
  },
  {
    id: 5,
    name: "Mantequilla Orgánica",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=300&fit=crop",
    description: "100% orgánica, de vacas alimentadas con pasto",
    category: "Orgánica"
  },
  {
    id: 6,
    name: "Mantequilla de Trufa",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1571197119282-7c4a2b8d7d8c?w=400&h=300&fit=crop",
    description: "Lujo culinario con auténticas trufas negras",
    category: "Premium"
  }
];

export const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  console.log("ProductGrid rendered with", products.length, "products");

  return (
    <section id="productos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Nuestros Productos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};