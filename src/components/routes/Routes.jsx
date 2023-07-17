import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Featured from "../Home/Featured";
import Fasilities from "../Fasilities/Fasilities";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import FindDoctor from "../FindDoctor/FindDoctor";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
          {
            path:'/',
            element:<Featured></Featured>
          },
          {
            path:'fasilities',
            element:<Fasilities></Fasilities>
          },
          {
            path:'aboutus',
            element:<AboutUs></AboutUs>
          },
          {
            path:'contact',
            element: <Contact></Contact>
          },
          {
            path:'finddoctor',
            element:<FindDoctor></FindDoctor>
          }
        ]
    }
])
export default router;