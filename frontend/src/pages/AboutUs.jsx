import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="px-6 lg:px-20 mt-[50px]">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">About Jeevansetu</h1>
        <p className="text-xl text-gray-600 mt-4">
          A Platform to Connect Blood Donors and Recipients for Saving Lives
        </p>
        <div className="border-b-4 border-gray-300 w-20 mx-auto mt-6"></div>
      </div>

      {/* Jeevansetu Description */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 text-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold">About Jeevansetu</h2>
        <p className="text-lg mt-4">
          Jeevansetu is a dedicated community platform working to save lives by
          promoting blood donation. Our mission is to make blood donation
          accessible to everyone in need. Join us in making a difference and
          creating a network of lifesavers across the nation!
        </p>
      </div>

      {/* What is Jeevansetu Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          What is Jeevansetu?
        </h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-4">
          <li>
            Connecting blood donors with those in need, saving countless lives.
          </li>
          <li>Making it easy for anyone to donate blood and help others.</li>
          <li>
            Being a community-driven initiative to make blood donation
            accessible nationwide.
          </li>
          <li>Spreading awareness and creating a network of lifesavers.</li>
        </ul>
      </div>

      {/* Objectives Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Objectives
        </h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-4">
          <li>Increase the availability of blood in emergency situations.</li>
          <li>
            Encourage more people to participate in regular blood donation
            camps.
          </li>
          <li>
            Maintain a repository of donors for easy access in critical times.
          </li>
          <li>
            Establish a nationwide blood donor network for fast connections.
          </li>
        </ul>
      </div>

      {/* Salient Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Salient Features</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="font-semibold">
                Easy Registration for Donors
              </span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold">
                Real-Time Blood Availability Updates
              </span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold">
                Connecting Blood Banks and Donors
              </span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold">
                Regular Blood Donation Camps
              </span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold">
                Dedicated Support for Donor and Recipients
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">How Jeevansetu Works</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="font-semibold">
                Search for Nearby Donors or Blood Banks
              </span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold">
                Sign Up as a Donor or Requestor
              </span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold">
                Donate Blood or Request for Blood
              </span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold">Get Real-Time Notifications</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold">Track Donation Progress</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Blood Donation Camps Section */}
      <div className="bg-gray-200 p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Blood Donation Camps
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Jeevansetu frequently organizes blood donation camps across various
          locations. By participating in these camps, you can contribute towards
          saving lives and help the community.
        </p>
        <a
          href="#"
          className="text-white bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Find a Blood Donation Camp Near You
        </a>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AboutUs;
