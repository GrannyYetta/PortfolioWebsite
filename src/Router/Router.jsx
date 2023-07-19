import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/ProjectsPage";
import Layout from "../Layout/Layout";
import ProjectDetails from "../pages/ProjectsPage/ProjectDetails";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [{
            path: "/",
            element: <Home />
        },
            {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,   
        },
        {
            //link to a dynamic route --> useParams
            path: "/projects",
            element: <Projects />,
        },
        {
            path:"projects/:id",
            element: <ProjectDetails/>,

        }
    ]
    }
])

