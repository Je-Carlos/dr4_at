import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8 pt-96">
        Desenvolvimento Web com React - Assessment{" "}
      </h1>
      <h2 className="text-2xl font-bold p-6">
        Eventos com atualização da interface
      </h2>
      <div className="space-y-4">
        <Link
          to="/at11"
          className="block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Pergunta e Resposta
        </Link>
        <Link
          to="/at12"
          className="block px-6 py-3 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
        >
          Evento Inline
        </Link>
        <Link
          to="/at13"
          className="block px-6 py-3 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
        >
          Tratamento de Eventos
        </Link>
        <Link
          to="/at14"
          className="block px-6 py-3 bg-purple-500 text-white rounded hover:bg-purple-700 transition duration-300"
        >
          Desvantagens de Inline Event
        </Link>
        <h2 className="text-2xl font-bold p-1">React Hooks</h2>
        <Link
          to="/at21"
          className="block px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-700 transition duration-300"
        >
          Checkbox Administrador
        </Link>
        <Link
          to="/at22"
          className="block px-6 py-3 bg-teal-500 text-white rounded hover:bg-teal-700 transition duration-300"
        >
          Dropdown de Países
        </Link>
        <Link
          to="/at23"
          className="block px-6 py-3 bg-pink-500 text-white rounded hover:bg-pink-700 transition duration-300"
        >
          Filtro de Produtos
        </Link>
        <Link
          to="/at24"
          className="block px-6 py-3 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition duration-300"
        >
          Categorias de Pratos
        </Link>
        <h2 className="text-2xl font-bold p-1">Formulários Web</h2>
        <Link
          to="/at31"
          className="block px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-700 transition duration-300"
        >
          Formulário Simples
        </Link>
        <Link
          to="/at32"
          className="block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Formulário com Validações
        </Link>
        <Link
          to="/at33"
          className="block px-6 py-3 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
        >
          Formulário Questão 3.1
        </Link>
        <Link
          to="/at34"
          className="block px-6 py-3 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
        >
          Formulário Questão 3.2
        </Link>
        <h2 className="text-2xl font-bold p-1">Páginas React Router</h2>
        <Link
          to="/admin-on"
          className="block px-6 py-3 bg-purple-500 text-white rounded hover:bg-purple-700 transition duration-300"
        >
          Administrador Ligado
        </Link>
        <Link
          to="/admin-off"
          className="block px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-700 transition duration-300"
        >
          Administrador Desligado
        </Link>
        <Link
          to="/at43"
          className="block px-6 py-3 bg-teal-500 text-white rounded hover:bg-teal-700 transition duration-300"
        >
          Brasil Selecionado
        </Link>
        <Link
          to="/at44"
          className="block px-6 py-3 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition duration-300"
        >
          Rota Preenchida
        </Link>
      </div>
    </div>
  );
}
