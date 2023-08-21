import './App.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Forman from "./pages/Forman";
import Forwoman from "./pages/Forwoman";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>ERROR</h1>,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Forman",
    element: <Forman />,
  },
  {
    path: "/Forwoman",
    element: <Forwoman />,
  },
]);

function App() {
  return (
    <div className="App">
       <RouterProvider router={router} >
        
          <Home />
        
       </RouterProvider>
    </div>
  );
}


export default App;
