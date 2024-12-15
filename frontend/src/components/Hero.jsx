const Hero = () => {
  return (
    <div className="bg-[url('/banner2.jpg')] bg-no-repeat bg-cover min-h-[100vh] px-[100px]">
      <div className="flex flex-col text-red-700 w-[50%] pt-[20%]">
        <div className="flex justify-start pl-30 w-full">
          <span className="text-[25px] leading-relaxed text-gray-800">
            <span className="block text-red-600 font-semibold text-2xl">
              A bottle of blood saved my life.
            </span>
            <span className="block mt-2 justify-center text-red-700 font-bold text-4xl">
              Was it yours?
            </span>
            <span className="block mt-6 text-black font-medium text-lg">
              Every donation matters. Every drop counts. <br />
              You can give someone the gift of life — and it takes just a
              moment.
            </span>
            <span className="block mt-4 text-indigo-800 font-semibold text-xl">
              Be the reason someone gets a second chance.
            </span>
          </span>
        </div>
        <div className="mt-8 flex gap-6">
          <a
            href="#donate"
            className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all"
          >
            Donate Now
          </a>

          <a
            href="tel:+919876543210"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-all"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
