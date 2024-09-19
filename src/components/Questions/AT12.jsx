export default function AT12() {
  const handleClick = () => {
    alert("Eu sou um evento inline!");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        onClick={() => handleClick()}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
      >
        Clique aqui
      </button>
    </div>
  );
}
