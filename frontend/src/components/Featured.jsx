const Featured = () => {
  return (
    <div className="flex px-[100px] mt-[50px] gap-[30px] justify-center items-center flex-wrap">
      {/* Left Container: "Who We Are" Section (Large Box) */}
      <div className="bg-gray-800 h-auto w-[600px] z-10 mt-[20px] rounded-lg shadow-2xl p-10 flex flex-col justify-start">
        {/* Title with Bottom Border and Question Mark next to it */}
        <div className="flex items-center mb-4">
          <h2 className="text-4xl font-semibold text-white">Who We Are</h2>
          <span className="text-4xl text-white ml-2">?</span>
        </div>

        {/* Border Line Below Title */}
        <div className="border-b-4 border-gray-400 mb-6"></div>

        {/* Description Text */}
        <p className="text-gray-300 text-lg mb-6">
          Jeevansetu is a dedicated community platform working to save lives by
          promoting blood donation. Our mission is to make blood donation
          accessible to everyone in need. Join us in making a difference!
        </p>

        {/* Bullet Points - What Jeevansetu is */}
        <div className="text-gray-300 text-lg">
          <h3 className="font-semibold text-xl mb-4">What is Jeevansetu?</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              We connect blood donors with those in need, saving countless
              lives.
            </li>
            <li>
              Our platform makes it easy for anyone to donate blood and help
              others.
            </li>
            <li>
              We are a community-driven initiative to make blood donation
              accessible nationwide.
            </li>
            <li>
              Join us in spreading awareness and creating a network of
              lifesavers.
            </li>
          </ul>
        </div>
      </div>

      {/* Right Container: Video Section */}
      <div className="flex justify-center items-center">
        <video
          src="/video.mp4" // Ensure the path is correct
          height="500px"
          width="600px"
          loop
          muted
          autoPlay
          controls
          className="rounded-lg shadow-2xl border-4 border-white"
        />
      </div>
    </div>
  );
};

export default Featured;
