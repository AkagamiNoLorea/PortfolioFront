import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SavePortfolio from "../components/SavePortfolio";
import EditPortfolio from "../components/EditPortfolio";
import DeletePortfolio from "../components/DeletePortfolio";
import ShowPortfolios from "../components/ShowPortfolios";

export const router = createBrowserRouter([
     {
        path: "/myprojects",
        element: <ShowPortfolios/>
    },
    {
        path: "/create",
        element: <SavePortfolio/>
    },
    {
        path: "/edit/:portfolioId",
        element: <EditPortfolio/>
    },
    {
        path: "/delete/:portfolioId",
        element: <DeletePortfolio/>
    },
    {
        path: "/",
        element: <Home/>
    }
])
