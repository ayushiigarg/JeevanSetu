import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Donors from "./pages/Donors";
import Prospects from "./pages/Prospects";
import Menu from "./components/Menu";
import CampSchedules from "./pages/CampSchedules";
import Donate from "./components/Donate";
import ContactPage from "./pages/Contact"; // Import the ContactPage component
import AboutUs from "./pages/AboutUs";
import AddBloodBankPage from "./pages/AddBloodBank";
import Prospect from "./pages/Prospect";
import NewDonor from "./pages/NewDonor";
import Donor from "./pages/Donor";
function App() {
  const Layout = () => {
    return (
      <div className="flex">
        <div>
          <Menu />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/donate",
      element: <Donate />,
    },
    {
      path: "/contact", // Add the Contact page route
      element: <ContactPage />,
    },
    {
      path: "/camp-schedules",
      element: <CampSchedules />,
    },
    {
      path: "/addBloodBank",
      element: <AddBloodBankPage />,
    },
    {
      path: "/admin",
      element: <Layout />,
      children: [
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/admin/donors",
          element: <Donors />,
        },

        {
          path: "/admin/prospects",
          element: <Prospects />,
        },
        {
          path: "/admin/prospect/:id",
          element: <Prospect />,
        },
        {
          path: "/admin/newdonor/",
          element: <NewDonor />,
        },
        {
          path: "/admin/donor/:id",
          element: <Donor />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
