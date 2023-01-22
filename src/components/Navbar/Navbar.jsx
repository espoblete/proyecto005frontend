import React, { useContext } from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import NavbarBT from 'react-bootstrap/Navbar';
import UserContext from '../../config/contexts/users/UserContext';

import './navbar.css';

export default function Navbar() {
  const ctx = useContext( UserContext )

  const { logout, user } = ctx
  return (
    <NavbarBT id="navbar-bootstrap" bg='dark' variant='dark' expand="md">
      <Container>
      
        <NavbarBT.Brand href='/'>
          <img class="navbar-brand"  alt=' ' src="https://www.pngplay.com/wp-content/uploads/6/Red-Alloy-Wheel-PNG.png" width="4%"></img>
          Inicio
        </NavbarBT.Brand>
        <NavbarBT.Toggle aria-controls="basic-navbar-nav"></NavbarBT.Toggle>
        <NavbarBT.Collapse id='basic-navbar-nav'>
          <Nav>

          <Button><Nav.Link href='/'>Home</Nav.Link></Button>

          {
            user?.email ? <>
          <Button><Nav.Link href='/profile'>Perfil</Nav.Link></Button>
          <Button onClick={ () => logout() } > <Nav.Link href='/'>Cerrar sesión</Nav.Link></Button>
           </> : <>
          <Button><Nav.Link href='/auth/login'>Iniciar sesión</Nav.Link></Button>
          <Button><Nav.Link href='/auth/signup'>Registrarse</Nav.Link></Button>
          
           </>
          }

            
            <Nav.Link href='/informacion'>¿Quiénes somos?</Nav.Link>
            <Nav.Link href='/catalogue'>Catálogo</Nav.Link>
            <Nav.Link href='/ubicacion'>Ubicación</Nav.Link>
          </Nav>
        </NavbarBT.Collapse>
      </Container>
    </NavbarBT>
  );
}


