import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import ProjectDetails from "../Components/Projects/ProjectDetails/ProjectDetails";
import Loader from "../Components/Loader/Loader";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
                hydrateFallbackElement: <Loader/>,
                loader: () => fetch("/projects.json")
            },
            {
                path: "projects/:id",
                hydrateFallbackElement: <Loader/>,
                loader: () => fetch("/projects.json"),
                Component: ProjectDetails
            }
        ]
    }
])