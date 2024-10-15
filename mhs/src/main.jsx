
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Course from './Component/Courses.jsx';
import Page from './Component/Page.jsx';
import Contact from './Component/Contact.jsx';
import About from './Component/About.jsx';
import Login from './Component/Login.jsx';
import Quiz from './Component/Quiz.jsx';
import SignupForm from './Component/Singup.jsx';
import './index.css'
import {createBrowserRouter,RouterProvider} from"react-router-dom";
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/course",
    element:<Course/>
  },
  {path:"/page",
    element:<Page/>
   },
   {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/Singup",
    element:<SignupForm/>
  },
  {
    path:"/quiz",
    element:<Quiz/>
  },
  {path:"/contact",
    element:<Contact/>
  }



])
ReactDOM.createRoot(document.getElementById("root")).render(
  
 <RouterProvider router={router} />  
 
)
