import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
const Navegacion = () => {
    return (
        <Navbar bg="danger" expand="lg" variant='dark'>
  <Navbar.Brand href="/">Cafeteria</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink exact={true} to='/' className='nav-link'>Inicio</NavLink>
      <NavLink exact={true} to='/producto' className='nav-link'>Lista de Productos</NavLink>
      <NavLink exact={true} to='/producto/nuevo' className='nav-link'>Agregar Producto</NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Navegacion;