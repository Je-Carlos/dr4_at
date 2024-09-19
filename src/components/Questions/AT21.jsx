import { useState } from "react";

export default function AT21({ initialChecked = false }) {
  const [isAdmin, setIsAdmin] = useState(initialChecked);

  const handleCheckboxChange = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={isAdmin}
          onChange={handleCheckboxChange}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span className="text-lg">Administrador</span>
      </label>
      <p className="mt-4 text-lg">
        {isAdmin
          ? "O usuário atual é Administrador"
          : "O usuário atual é Colaborador"}
      </p>
    </div>
  );
}
