import { use } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

export default function ProductContainer() {
  const navigation = useNavigate();

  const products = [
    {
      id: 1,
      productname: "Product 1",
      price: 100,
      description: "This is a description for product 1",
      image: "https://picsum.photos/500",
    },
    {
      id: 2,
      productname: "Product 2",
      price: 200,
      description: "This is a description for product 2",
      image: "https://picsum.photos/700",
    },
    {
      id: 3,
      productname: "Product 3",
      price: 300,
      description: "This is a description for product 3",
      image: "https://picsum.photos/800",
    },
    {
      id: 4,
      productname: "Product 4",
      price: 400,
      description: "This is a description for product 4",
      image: "https://picsum.photos/900",
    },
  ];

  const handleClick = (product) => {
    navigation(`/product/${product.id}`, { state: { product } });
  };
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 px-20 py-10">
        {products.map((product) => (
          //<ProductCard key={product.id} productname={product.productname} Price={product.Price} description={product.description} />
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleClick(product)}
          />
        ))}
      </div>
    </div>
  );
}
