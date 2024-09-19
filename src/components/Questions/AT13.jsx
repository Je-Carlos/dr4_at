export default function AT13() {
  const handleClick = () => {
    alert("Evento Tratado!");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
      >
        Clique aqui
      </button>
    </div>
  );
}
