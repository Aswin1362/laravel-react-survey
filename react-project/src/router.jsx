import { createBrowserRouter } from "react-router";
import DashBoard from "./views/DashBoard";
import Surveys from "./views/Surveys";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import SurveyView from "./views/SurveyView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/surveys",
        element: <Surveys />,
      },
      {
        path: "/surveys/create",
        element: <SurveyView />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
