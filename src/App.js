import logo from './logo.svg';
import './App.css';


/*Importamos componente Login */
import  Login from './Pages/login';
import  Create from './Pages/create';


/*Importamos React */
import * as React from "react";


/*Importamos createBrouserRouter y RouterProvider de react router */
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


/*Configuramos el router */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,/*La ruta raiz apunta a el componente Login */
  },
  {
    path: "/create",
    element: <Create/>,/*La ruta raiz apunta a el componente create */
  },
]);


function App() {
  /*Retornamos nuestro router */
  return (
   <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}


export default App;
