import './App.css';
import { createBrowserRouter, RouterProvider , createRoutesFromElements , Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./commp/Layout"

import Man from "./pages/products/man/Man";
import ManDetail from './pages/products/man/ManDetail';
import Woman from "./pages/products/woman/Woman";
import WomanDetail from './pages/products/woman/WomanDetail';


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path='/' element= {<Home />}/>
    <Route path='about' element= {<About />}/>
    <Route path='/contact' element= {<Contact />}/>
    <Route path='/man' element= {<Man />}/>
    <Route path='/man/:id' element= {<ManDetail />}/>
    <Route path='/woman' element= {<Woman />}/>
    <Route path='/woman/:id' element= {<WomanDetail />}/>
  </Route>
))

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


