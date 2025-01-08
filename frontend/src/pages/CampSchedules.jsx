import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../App";

const CampSchedules = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [date, setDate] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch("https://api.countrystatecity.in/v1/countries", {
      headers: { "X-CSCAPI-KEY": API_KEY },
    })
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error loading countries:", error));
  }, []);

  const handleCountryChange = (iso2) => {
    setSelectedCountry(iso2);
    setSelectedState("");
    setCities([]);
    if (iso2) {
      fetch(`https://api.countrystatecity.in/v1/countries/${iso2}/states`, {
        headers: { "X-CSCAPI-KEY": API_KEY },
      })
        .then((res) => res.json())
        .then((data) => setStates(data))
        .catch((error) => console.error("Error loading states:", error));
    }
  };

  const handleStateChange = (iso2) => {
    setSelectedState(iso2);
    setCities([]);
    if (iso2) {
      fetch(
        `https://api.countrystatecity.in/v1/countries/${selectedCountry}/states/${iso2}/cities`,
        { headers: { "X-CSCAPI-KEY": API_KEY } }
      )
        .then((res) => res.json())
        .then((data) => setCities(data))
        .catch((error) => console.error("Error loading cities:", error));
    }
  };

  const handleSearch = () => {
    console.log(
      "Country:",
      selectedCountry,
      "State:",
      selectedState,
      "Date:",
      date
    );
  };

  return (
    <div className="p-8">
      <Navbar />
      <h2 className="text-2xl font-bold text-red-600 mb-4">Camp Schedule</h2>
      <div className="bg-red-100 p-6 rounded-md shadow-md">
        <div className="flex flex-wrap gap-4">
          <select
            className="border border-gray-300 p-2 rounded-md"
            value={selectedCountry}
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.iso2} value={country.iso2}>
                {country.name}
              </option>
            ))}
          </select>

          <select
            className="border border-gray-300 p-2 rounded-md"
            value={selectedState}
            onChange={(e) => handleStateChange(e.target.value)}
            disabled={!selectedCountry}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state.iso2} value={state.iso2}>
                {state.name}
              </option>
            ))}
          </select>

          <select
            className="border border-gray-300 p-2 rounded-md"
            disabled={!selectedState}
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>

          <input
            type="date"
            className="border border-gray-300 p-2 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampSchedules;
