const Featured = () => {
  return (
    <div className="flex px-[100px] mt-[50px] gap-[30px] justify-center items-center flex-wrap">
      {/* Left Container: Blood Compatibility Table */}
      <div className="h-auto w-[600px] z-10 mt-[20px] rounded-lg shadow-2xl p-10 flex flex-col justify-start">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-semibold text-white">
            Blood Compatibility
          </h2>
        </div>

        {/* Blood Compatibility Table */}
        <table
          style={{ width: "100%", color: "white", backgroundColor: "red" }}
          className="table-auto border-collapse w-full"
        >
          <thead>
            <tr>
              <th className="border px-4 py-2">Donor Blood Type</th>
              <th className="border px-4 py-2">Recipient Blood Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">O+</td>
              <td className="border px-4 py-2">O+, A+, B+, AB+</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">O-</td>
              <td className="border px-4 py-2">
                O+, O-, A+, A-, B+, B-, AB+, AB-
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">A+</td>
              <td className="border px-4 py-2">A+, AB+</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">A-</td>
              <td className="border px-4 py-2">A+, A-, AB+, AB-</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">B+</td>
              <td className="border px-4 py-2">B+, AB+</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">B-</td>
              <td className="border px-4 py-2">B+, B-, AB+, AB-</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">AB+</td>
              <td className="border px-4 py-2">AB+</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">AB-</td>
              <td className="border px-4 py-2">AB+, AB-</td>
            </tr>
          </tbody>
        </table>
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
