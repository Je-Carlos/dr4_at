import { useState } from "react";
import { Link } from "react-router-dom";
const menuItems = [
  { path: "/", label: "Home" },
  { path: "/at11", label: "Pergunta e Resposta" },
  { path: "/at12", label: "Evento Inline" },
  { path: "/at13", label: "Tratamento de Eventos" },
  { path: "/at14", label: "Desvantagens de Inline Event" },
  { path: "/at21", label: "Checkbox Administrador" },
  { path: "/at22", label: "Dropdown de Países" },
  { path: "/at23", label: "Filtro de Produtos" },
  { path: "/at24", label: "Categorias de Pratos" },
  { path: "/at31", label: "Formulário Simples" },
  { path: "/at32", label: "Formulário com Validações" },
  { path: "/at33", label: "Formulário Questão 3.1" },
  { path: "/at34", label: "Formulário Questão 3.2" },
  { path: "/admin-on", label: "Administrador Ligado" },
  { path: "/admin-off", label: "Administrador Desligado" },
  { path: "/at43", label: "Brasil Selecionado" },
  { path: "/at44", label: "Rota Preenchida" },
];

export default function Menu() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  const handleNext = () => {
    if (startIndex + itemsPerPage < menuItems.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleItems = menuItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <nav className="fixed-menu p-4 bg-gray-800 text-white flex items-center justify-between">
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className="px-2 py-1 bg-gray-600 text-white rounded disabled:opacity-50"
      >
        &lt;
      </button>
      <ul className="flex space-x-4">
        {visibleItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path} className="hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={handleNext}
        disabled={startIndex + itemsPerPage >= menuItems.length}
        className="px-2 py-1 bg-gray-600 text-white rounded disabled:opacity-50"
      >
        &gt;
      </button>
    </nav>
  );
}
