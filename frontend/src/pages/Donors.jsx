import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";

const Donors = () => {
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 90,
      headerClassName: "header-style",
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      headerClassName: "header-style",
    },
    {
      field: "address",
      headerName: "Address",
      width: 200,
      headerClassName: "header-style",
    },
    {
      field: "bloodgroup",
      headerName: "Blood Type",
      width: 150,
      headerClassName: "header-style",
    },
    {
      field: "diseases",
      headerName: "Diseases",
      width: 200,
      headerClassName: "header-style",
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <div className="flex items-center space-x-2">
          {/* Edit Button */}
          <Link to={`/admin/editdonor/${params.row._id}`}>
            <button className="text-blue-500 hover:text-blue-700">
              <FaEdit />
            </button>
          </Link>

          {/* Delete Button */}
          <button className="text-red-500 hover:text-red-700">
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  const rows = [
    {
      _id: "1",
      name: "John Doe",
      address: "123 Main St",
      bloodgroup: "A+",
      diseases: "None",
    },
    {
      _id: "2",
      name: "Jane Smith",
      address: "456 Oak St",
      bloodgroup: "B+",
      diseases: "Hypertension",
    },
    // Add more rows here
  ];

  return (
    <div className="w-full p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">All Donors</h1>
        <Link to="/admin/newdonor">
          <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
            New Donor
          </button>
        </Link>
      </div>
      <div className="shadow-lg rounded-lg overflow-hidden">
        <DataGrid
          rows={rows}
          getRowId={(row) => row._id}
          checkboxSelection
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 25]}
          disableSelectionOnClick
          sx={{
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#f1f1f1",
              color: "#333",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#f7f7f7",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Donors;
