import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase';
import useUser from '../../hooks/useUser';
import './Header.css';
const Header = () => {

    const [user] = useUser(); 

    return (
        <Navbar fixed='top' bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src="https://i.postimg.cc/cLGM7mRM/logo.png" alt="logo" width='100px' className='mx-5' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className='nav-link' to="/">Home</NavLink>
                    <NavLink className='nav-link' to="/inventory">Inventory</NavLink>
                    {
                        user.uid ? 
                        <>
                            <NavLink className='nav-link' to="/manage-inventory">Manage Inventory</NavLink>
                            <NavLink className='nav-link' to="/add-products">Add Product</NavLink>
                            <NavLink className='nav-link' to="/my-item">My Item</NavLink>
                        </> :""
                    }
                    <NavLink className='nav-link' to="/blogs">Blogs</NavLink>
                </Nav>
                <Nav className="ms-auto mx-3">
                    {user.uid ?
                        <Button onClick={async()=>{
                            await signOut(auth);
                            window.location.reload()
                        }}>Sign Out</Button>
                    :
                        <Link className='nav-link' to="/login">
                            <Button>Login</Button>
                        </Link>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;