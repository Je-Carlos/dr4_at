import { useState, useEffect } from "react";

export default function AT24() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);
      })
      .catch((error) => console.error("Erro ao buscar categorias:", error));
  }, []);

  const handleChange = (event) => {
    const category = categories.find(
      (category) => category.strCategory === event.target.value
    );
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <label className="mb-4 text-lg font-bold">Selecione uma categoria:</label>
      <select
        onChange={handleChange}
        className="mb-4 p-2 border border-gray-300 rounded w-full max-w-md"
      >
        <option value="">Selecione uma categoria</option>
        {categories.map((category) => (
          <option key={category.idCategory} value={category.strCategory}>
            {category.strCategory}
          </option>
        ))}
      </select>
      {selectedCategory && (
        <div className="w-full max-w-md bg-white rounded shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">
            {selectedCategory.strCategory}
          </h2>
          <p className="mb-4">{selectedCategory.strCategoryDescription}</p>
          <img
            src={selectedCategory.strCategoryThumb}
            alt={selectedCategory.strCategory}
            className="w-full h-auto rounded"
          />
        </div>
      )}
    </div>
  );
}
