import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home/Home";
import Project from "../Page/Project/Project";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/project',
                element: <Project></Project>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    },
]);

export default router;