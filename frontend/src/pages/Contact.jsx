import Footer from "../components/Footer"; // Adjust the path as necessary

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Contact Form / Information */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-4">
          We would love to hear from you! Please reach out to us for any
          inquiries.
        </p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Our Contact Information
          </h3>

          <p className="mb-2">
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+919876543210"
              className="text-blue-500 hover:text-yellow-400"
            >
              +91 98765 43210
            </a>
          </p>

          <p className="mb-2">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@jeevansetu.com"
              className="text-blue-500 hover:text-yellow-400"
            >
              support@jeevansetu.com
            </a>
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ContactPage;
