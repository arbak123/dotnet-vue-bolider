import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

//Basic navbar setup with Dashboard and Auth routes
const NavBar = () => {
    const { user } = useContext(UserContext)
    return (
        <Navbar bg="dark" data-bs-theme="dark" >
            <Container className=''>
                <Link style={{ textDecoration: 'none' }} to="/" ><Navbar.Brand href="#home">Navbar</Navbar.Brand></Link>
                <Nav className="gap-4">
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="">Dashboard</Link>
                    {user===null ?
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/register">SignUp/SignIn</Link> :
                        <Link to="/profile">Hi, {user.username}</Link>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar