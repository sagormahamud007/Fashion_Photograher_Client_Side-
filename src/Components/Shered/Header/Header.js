import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Header.css'
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch((error) => {

            });
    }
    return (
        <div className='overflow-hidden'>
            <Navbar bg="dark" expand="lg" className='py-3'>
                <Container fluid>
                    <Navbar.Brand href="#">
                        <div>
                            <span className='header-name'> CREATIVE PHOTOGRAPHER</span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto me-0 my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >


                            <Link className=' me-5 text-decoration-none header-link' to='/'>Home</Link>

                            <Link className=' me-5 text-decoration-none header-link' to='/services'>Services</Link>

                            <Link className=' me-5 text-decoration-none header-link' to='/reviews'>My reviews</Link>

                            <Link className=' me-5 text-decoration-none header-link' to='/addService'>Add Service</Link>

                            <Link className=' me-5 text-decoration-none header-link' to='/blog'>Blog</Link>

                            {
                                user?.photoURL ?
                                    <Image style={{ height: '40px' }} roundedCircle
                                        src={user?.photoURL}></Image>
                                    : <FaUser></FaUser>
                            }

                            {
                                user?.uid ?
                                    <>
                                        {/* <span className='text-light'> {user?.displayName}</span> */}
                                        <button
                                            onClick={handleSignOut} className='mx-5 bg-info border-0 text-dark rounded py-2 px-3'>Log Out
                                        </button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'> <button className='me-3 text-decoration-none bg-info text-light border-0 py-2 px-4 rounded'>
                                            Sign In
                                        </button></Link>

                                        <Link to='/signup' > <button className='me-3 text-decoration-none 
                                        bg-info text-light border-0 py-2 px-4 rounded'>Sign Up</button></Link>
                                    </>

                            }





                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;