import PropTypes from "prop-types";
import { useState } from "react";

export default function AT11({ pergunta, resposta }) {
  const [visivel, setVisivel] = useState(false);

  const toggleResposta = () => {
    setVisivel(!visivel);
  };

  return (
    <div className="max-w-md mx-auto my-4 p-6 border border-gray-300 rounded-lg shadow-md pt-16">
      {" "}
      <div className="text-lg font-bold mb-2">{pergunta}</div>
      <button
        onClick={toggleResposta}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        {visivel ? "Ocultar Resposta" : "Mostrar Resposta"}
      </button>
      {visivel && <div className="mt-4 text-gray-700">{resposta}</div>}
    </div>
  );
}

AT11.propTypes = {
  pergunta: PropTypes.string.isRequired,
  resposta: PropTypes.string.isRequired,
};
