import { createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";
import HomePage from "../../Features/Home/HomePage";
import Contact from '../../Features/Contact/contact';


export const Router = createBrowserRouter ([
    {
        path : '/',
        element : <App/>,
        children : [           
            {path : '/', element : <HomePage/>},
            {path : 'recettes-salees', element : <Contact/>},
           

        ]
    }
])