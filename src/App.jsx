import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from './components/Auth/Login/Login';
import PrivateRoute from './components/Auth/PrivateRoute/PrivateRoute';
import Profile from './components/Auth/Profile/Profile';
import Signup from './components/Auth/Signup/Signup';
//import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
//import Nosotros from './components/Nosotros/Nosotros';
//import Reservacion from './components/Reservacion/Reservacion';
import Catalogue from "./components/Catalogue/Catalogue";
import Errorpage from './components/ErrorPage/Errorpage';
//import Layout from "../src/components/Layout/Layout"
//import Home from './components/Homy/Home/Home';
import Informacion from '../src/components/Informacion/Informacion';
import Ubicacion from '../src/components/Ubicacion/Ubicacion';
import Footer from '../src/components/Footer/Footer';
import UserState from './config/contexts/users/UserState';
import Homy from "./components/Homy/Homy";







//se renderizan los componentes
function App() {
  return (
    <div>
      <UserState>
        <Navbar />
        <Router>
          <Routes>

            { /* Ruta privada - PR antes del P */}
            <Route path="/profile" element={
              <PrivateRoute>
                <Profile></Profile>
              </PrivateRoute>
            }>
            </Route>

            {/* Rutas de auth */}
            <Route 
              path="/auth/login" 
              element={
              <Login></Login>
            }>
            </Route>

            <Route 
              path="/auth/signup" 
              element={
              <Signup></Signup>
            }>
            </Route>


            { /* Rutas públicas */}

            <Route
              path="/"
              element={<Homy />}
            />

            <Route
              path="/catalogue"
              element={<Catalogue />}
            />
            <Route
              path="/informacion"
              element={<Informacion />}
            />
            <Route
              path="/ubicacion"
              element={<Ubicacion />}
            />

            <Route
              path='*'
              element={<Errorpage />}
            />
            
          </Routes>
          <Footer />
        </Router>
      </UserState>
    </div>
  );
}

export default App;


