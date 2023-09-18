import { createBrowserRouter } from "react-router-dom";
import Home from "../components/5pages/Home";
import SavePortfolio from "../components/3organisms/crud/SavePortfolio";
import EditPortfolio from "../components/3organisms/crud/EditPortfolio";
import DeletePortfolio from "../components/3organisms/crud/DeletePortfolio";
import ShowPortfolios from "../components/3organisms/crud/ShowPortfolios";
import Layout from "../layout/Layout";
import AboutMe from "../components/5pages/AboutMe";
import Contact from "../components/5pages/Contact";
import Skills from "../components/5pages/Skills";

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
