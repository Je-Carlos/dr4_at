import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

export default function AT23() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const generatedProducts = Array.from({ length: 100 }, () =>
      faker.commerce.productName()
    );
    setProducts(generatedProducts);
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().startsWith(searchTerm)
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <input
        type="text"
        placeholder="Digite para filtrar produtos"
        value={searchTerm}
        onChange={handleChange}
        className="mb-4 p-2 border border-gray-300 rounded w-full max-w-md"
      />
      <ul className="w-full max-w-md bg-white rounded shadow-md p-4 max-h-96 overflow-y-auto">
        {filteredProducts.map((product, index) => (
          <li key={index} className="border-b border-gray-200 py-2">
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
}
