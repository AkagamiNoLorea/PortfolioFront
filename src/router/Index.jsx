import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SavePortfolio from "../components/crud/SavePortfolio";
import EditPortfolio from "../components/crud/EditPortfolio";
import DeletePortfolio from "../components/crud/DeletePortfolio";
import ShowPortfolios from "../components/crud/ShowPortfolios";
import Layout from "../layout/Layout";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/myprojects",
                element: <ShowPortfolios />
            },
            {
                path: "/create",
                element: <SavePortfolio />
            },
            {
                path: "/edit/:portfolioId",
                element: <EditPortfolio />
            },
            {
                path: "/delete/:portfolioId",
                element: <DeletePortfolio />
            },
            {
                path: "/aboutme",
                element: <AboutMe />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/skills",
                element: <Skills />
            }


        ]
    }
    ])
