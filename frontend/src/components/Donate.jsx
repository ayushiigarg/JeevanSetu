const Contact = () => {
  return (
    <div className="flex items-center justify-between my-[80px] px-4 sm:px-8 gap-8">
      {" "}
      {/* Add gap here */}
      {/* Form Section */}
      <div className="flex flex-col bg-white w-full sm:w-[80%] lg:w-[60%] xl:w-[50%] p-6 rounded-lg shadow-md border-2 border-red-500">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
          Want to Donate Blood? Fill the Form Below.
        </h2>

        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-800 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
            />
          </div>
          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-lg font-medium text-gray-800 mb-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
            />
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-800 mb-2 required"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
            />
          </div>
          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-lg font-medium text-gray-800 mb-2 required"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
            />
          </div>
          {/* Weight */}
          <div>
            <label
              htmlFor="weight"
              className="block text-lg font-medium text-gray-800 mb-2 required"
            >
              Weight(kg)
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="Enter your weight in kg"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
            />
          </div>
          {/* Blood Group */}
          <div>
            <label
              htmlFor="bloodgroup"
              className="block text-lg font-medium text-gray-800 mb-2 required"
            >
              Blood Group
            </label>
            <select
              id="bloodgroup"
              name="bloodgroup"
              placeholder="Select your blood group"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
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
          {/* Age */}
          <div>
            <label
              htmlFor="age"
              className="block text-lg font-medium text-gray-800 mb-2"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Enter your age"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
            />
          </div>
          {/* Diseases */}
          <div>
            <label
              htmlFor="diseases"
              className="block text-lg font-medium text-gray-800 mb-2"
            >
              Do you have any diseases?
            </label>
            <textarea
              id="diseases"
              name="diseases"
              rows="4"
              placeholder="Please list any current medical conditions (if any)"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Submit
          </button>
        </form>
      </div>
      {/* Information Section */}
      <div className="w-full sm:w-[40%] lg:w-[40%] xl:w-[50%] p-6 bg-gradient-to-br from-red-200 to-white rounded-lg shadow-lg">
        {/* Why Donate Blood */}
        <h3 className="text-2xl font-bold text-red-600 mb-4">
          Why Donate Blood?
        </h3>
        <p className="text-lg text-gray-800 mb-6">
          Donating blood is a simple yet life-saving act. Every donation can
          save up to three lives, whether it’s for surgery, cancer treatment, or
          trauma care. Your blood donation can help people in emergencies and
          give them a second chance at life. With blood always in demand, your
          contribution is incredibly valuable in saving lives and improving
          health outcomes.
        </p>

        {/* Eligibility Criteria */}
        <h4 className="text-xl font-semibold text-red-600 mb-4">
          Eligibility Criteria
        </h4>
        <ul className="list-inside list-disc text-lg text-gray-700 mb-6">
          <li>Must be 18-65 years old and in general good health.</li>
          <li>Weigh at least 50kg (110lbs).</li>
          <li>
            Should not have any ongoing medical conditions (consult a doctor if
            unsure).
          </li>
          <li>
            Should be free from infections like cold or flu at the time of
            donation.
          </li>
        </ul>

        {/* Myths vs. Reality Section */}
        <h4 className="text-xl font-semibold text-red-600 mb-4">
          Myths vs. Reality
        </h4>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h5 className="font-semibold text-red-600">
              Myth: Donating blood is painful.
            </h5>
            <p className="text-gray-700">
              Reality: The needle insertion may cause a brief pinch, but the
              actual process is quick, and most donors feel just fine afterward.
              The discomfort is minimal compared to the life-saving benefits.
            </p>
          </div>
          <div className="space-y-2">
            <h5 className="font-semibold text-red-600">
              Myth: You can catch diseases from donating blood.
            </h5>
            <p className="text-gray-700">
              Reality: Blood donation centers use sterile, disposable equipment
              for each donation. There is absolutely no risk of transmission of
              diseases like HIV or Hepatitis when donating blood.
            </p>
          </div>
          <div className="space-y-2">
            <h5 className="font-semibold text-red-600">
              Myth: Donating blood takes too much time.
            </h5>
            <p className="text-gray-700">
              Reality: The donation itself takes about 10 minutes, and the
              entire process, including registration and post-donation recovery,
              takes about 30-45 minutes. It’s a small amount of time to save
              lives.
            </p>
          </div>
          <div className="space-y-2">
            <h5 className="font-semibold text-red-600">
              Myth: Only young people can donate blood.
            </h5>
            <p className="text-gray-700">
              Reality: People between 18-65 years old are eligible, but older
              donors who meet the health criteria may also donate. Age is not a
              barrier as long as you’re healthy!
            </p>
          </div>
        </div>

        {/* How Often Can I Donate */}
        <h4 className="text-xl font-semibold text-red-600 mt-6 mb-4">
          How Often Can I Donate?
        </h4>
        <p className="text-lg text-gray-700 mb-6">
          Male donors can donate again after 90 days and female donors can
          donate again after 120 days. It’s important to give your body enough
          time to replenish the blood cells after each donation to ensure your
          health remains optimal.
        </p>
      </div>
    </div>
  );
};

export default Contact;
