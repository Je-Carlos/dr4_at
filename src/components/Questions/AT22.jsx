import React, { useState, useEffect } from "react";

export default function AT22({ initialCountry = "" }) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common);
        setCountries(countryNames);
      })
      .catch((error) => console.error("Erro ao buscar países:", error));
  }, []);

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <label className="mb-4 text-lg font-bold">Selecione um país:</label>
      <select
        value={selectedCountry}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="">Selecione um país</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      {selectedCountry && (
        <p className="mt-4 text-lg">País selecionado: {selectedCountry}</p>
      )}
    </div>
  );
}
