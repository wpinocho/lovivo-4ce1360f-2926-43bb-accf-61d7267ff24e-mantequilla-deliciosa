import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/pages/Index";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  console.log("ProductCard rendered for product:", product.name);

  const handleAddToCart = () => {
    console.log("Adding to cart:", product.name);
    onAddToCart(product);
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <Badge 
            className="absolute top-2 right-2 bg-yellow-500 text-white"
            variant="secondary"
          >
            {product.category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {product.description}
        </p>
        <div className="text-2xl font-bold text-yellow-600">
          ${product.price.toFixed(2)}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
        >
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};