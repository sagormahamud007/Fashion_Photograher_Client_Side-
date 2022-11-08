import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/header-img/images.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src={logo} alt="" />
                        <span className='header-name'> CREATIVE PHOTOGRAPHER</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className=' me-4 text-decoration-none' to='/'>Home</Link>
                            <Link className=' me-4 text-decoration-none' to='/blog'>Blog</Link>
                            <Link className='me-4 text-decoration-none' to='/login'>Login</Link>
                            <Link className='me-4 text-decoration-none' to='/signup'>Sign Up</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;