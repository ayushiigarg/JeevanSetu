import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../App";

const AddBloodBankPage = () => {
  // Form states
  const [formData, setFormData] = useState({
    bloodBankName: "",
    parentHospitalName: "",
    contactPerson: "",
    email: "",
    contactNo: "",
    firstRegDate: "",
    licenseNo: "",
    licenseFromDate: "",
    licenseToDate: "",
    category: "",
    componentFacility: "",
    apheresisFacility: "",
    helplineNo: "",
    postalAddress1: "",
    postalAddress2: "",
    pincode: "",
    noOfBeds: "",
    website: "",
    photos: [],
  });

  // Location data states
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // API Key
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    // Fetch countries when the component mounts
    fetch("https://api.countrystatecity.in/v1/countries", {
      headers: { "X-CSCAPI-KEY": API_KEY },
    })
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error loading countries:", error));
  }, []);

  // Fetch states when a country is selected
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

  // Fetch cities when a state is selected
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

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input (photos)
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      photos: files,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Form Submitted:",
      formData,
      selectedCountry,
      selectedState,
      selectedCity
    );
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/bloodbank.jpg')", // Set background image URL here
      }}
    >
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <div className="max-w-4xl mx-auto p-8 bg-white bg-opacity-60 backdrop-blur-md rounded-lg shadow-lg space-y-6">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
            Add Blood Bank
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Blood Bank Details */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Blood Bank Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="bloodBankName"
                    className="block text-gray-700 mb-2"
                  >
                    Blood Bank Name*
                  </label>
                  <input
                    type="text"
                    id="bloodBankName"
                    name="bloodBankName"
                    value={formData.bloodBankName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="parentHospitalName"
                    className="block text-gray-700 mb-2"
                  >
                    Parent Hospital Name*
                  </label>
                  <input
                    type="text"
                    id="parentHospitalName"
                    name="parentHospitalName"
                    value={formData.parentHospitalName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contactPerson"
                    className="block text-gray-700 mb-2"
                  >
                    Contact Person*
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contactNo"
                    className="block text-gray-700 mb-2"
                  >
                    Contact No.*
                  </label>
                  <input
                    type="tel"
                    id="contactNo"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="firstRegDate"
                    className="block text-gray-700 mb-2"
                  >
                    First Registration Date*
                  </label>
                  <input
                    type="date"
                    id="firstRegDate"
                    name="firstRegDate"
                    value={formData.firstRegDate}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            </div>

            {/* License Details */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                License Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="licenseNo"
                    className="block text-gray-700 mb-2"
                  >
                    License No.*
                  </label>
                  <input
                    type="text"
                    id="licenseNo"
                    name="licenseNo"
                    value={formData.licenseNo}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="licenseFromDate"
                    className="block text-gray-700 mb-2"
                  >
                    License From Date*
                  </label>
                  <input
                    type="date"
                    id="licenseFromDate"
                    name="licenseFromDate"
                    value={formData.licenseFromDate}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="licenseToDate"
                    className="block text-gray-700 mb-2"
                  >
                    License To Date*
                  </label>
                  <input
                    type="date"
                    id="licenseToDate"
                    name="licenseToDate"
                    value={formData.licenseToDate}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Location Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="country" className="block text-gray-700 mb-2">
                    Country*
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={selectedCountry}
                    onChange={(e) => handleCountryChange(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country.iso2} value={country.iso2}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="state" className="block text-gray-700 mb-2">
                    State*
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={selectedState}
                    onChange={(e) => handleStateChange(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    disabled={!selectedCountry}
                  >
                    <option value="">Select State</option>
                    {states.map((state) => (
                      <option key={state.iso2} value={state.iso2}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="city" className="block text-gray-700 mb-2">
                    City*
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    disabled={!selectedState}
                  >
                    <option value="">Select City</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Address & Additional Info */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Address & Additional Info
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="postalAddress1"
                    className="block text-gray-700 mb-2"
                  >
                    Address Line 1*
                  </label>
                  <input
                    type="text"
                    id="postalAddress1"
                    name="postalAddress1"
                    value={formData.postalAddress1}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="postalAddress2"
                    className="block text-gray-700 mb-2"
                  >
                    Address Line 2
                  </label>
                  <input
                    type="text"
                    id="postalAddress2"
                    name="postalAddress2"
                    value={formData.postalAddress2}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="pincode" className="block text-gray-700 mb-2">
                    Pincode*
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="noOfBeds"
                    className="block text-gray-700 mb-2"
                  >
                    No. of Beds*
                  </label>
                  <input
                    type="number"
                    id="noOfBeds"
                    name="noOfBeds"
                    value={formData.noOfBeds}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-gray-700 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="photos" className="block text-gray-700 mb-2">
                    Photos
                  </label>
                  <input
                    type="file"
                    id="photos"
                    name="photos"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBloodBankPage;
