import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import Login from './components/Auth/Login/Login.jsx';
import PrivateRoute from './components/Auth/PrivateRoute/PrivateRoute.jsx';
import Profile from './components/Auth/Profile/Profile.jsx';
import Signup from './components/Auth/Signup/Signup.jsx';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar';
import UserState from './contexts/users/UserState.jsx';

function App() {
  return (
    <div className="App">
      <UserState>
        <Navbar />
        <Router>
          <Routes>

            { /* Rutas privadas */ }
            <Route path="/profile" element={
              <PrivateRoute>
                <Profile></Profile>
              </PrivateRoute>
            }>
            </Route>

            {/* Rutas de auth */ }
            <Route path="/auth/login" element={
              <Login></Login>
            }>
            </Route>

            <Route path="/auth/signup" element={
              <Signup></Signup>
            }>
            </Route>

            { /* Rutas públicas */ }

            <Route
              path="/"
              element={ <Home /> }
            />

          </Routes>
        </Router>
      </UserState>
    </div>
  );
}

export default App;