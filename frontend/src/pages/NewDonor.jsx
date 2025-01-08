import React from "react";

const NewDonor = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Main Content Area */}
      <div className="w-full max-w-8xl p-16 bg-white rounded-lg shadow-2xl">
        <h2 className="font-extrabold text-4xl text-center text-gray-800 mb-16">
          New Donor
        </h2>

        {/* Form Container with two sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
          {" "}
          {/* Further increased gap */}
          {/* Left Section */}
          <div className="space-y-12 p-14 bg-white rounded-lg shadow-2xl">
            {" "}
            {/* Increased padding */}
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="text-2xl text-gray-700 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border-2 border-gray-300 p-5 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="John Doe"
              />
            </div>
            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="text-2xl text-gray-700 font-medium"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="border-2 border-gray-300 p-5 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="123 DownTown, Sydney"
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-2xl text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border-2 border-gray-300 p-5 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="janedoe@example.com"
              />
            </div>
            {/* Blood Group */}
            <div>
              <label
                htmlFor="bloodgroup"
                className="text-2xl text-gray-700 font-medium"
              >
                Blood Group
              </label>
              <select
                id="bloodgroup"
                className="w-full p-5 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
          {/* Right Section */}
          <div className="space-y-12 p-14 bg-white rounded-lg shadow-2xl">
            {" "}
            {/* Increased padding */}
            {/* Weight */}
            <div>
              <label
                htmlFor="weight"
                className="text-2xl text-gray-700 font-medium"
              >
                Weight
              </label>
              <input
                type="number"
                id="weight"
                className="border-2 border-gray-300 p-5 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="50kg"
              />
            </div>
            {/* Date */}
            <div>
              <label
                htmlFor="date"
                className="text-2xl text-gray-700 font-medium"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                className="border-2 border-gray-300 p-5 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            {/* Diseases */}
            <div>
              <label
                htmlFor="diseases"
                className="text-2xl text-gray-700 font-medium"
              >
                Diseases
              </label>
              <input
                type="text"
                id="diseases"
                className="border-2 border-gray-300 p-5 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Any Diseases"
              />
            </div>
            {/* Telephone */}
            <div>
              <label
                htmlFor="tel"
                className="text-2xl text-gray-700 font-medium"
              >
                Telephone
              </label>
              <input
                type="text"
                id="tel"
                className="border-2 border-gray-300 p-5 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="(026) 272 839"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-12">
          <button className="w-full bg-red-500 text-white p-6 rounded-md hover:bg-red-600 transition-all">
            Create Donor
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewDonor;
