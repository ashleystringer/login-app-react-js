import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';
import {LinkContainer} from 'react-router-bootstrap'

export default function NavBar({loginState}) {

    const { isLoggedIn } = useUser();
    /*
    const loginState = {
        //if isLogged is true
            //display username state
            //display Logout link
        //else
            //don't display username
            //display Login link
    }
    */

    //{`/${isLoggedIn ? 'logout' : 'login'}`}
    return (
        <Navbar>
            <Container>
                <Nav>
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={`/${isLoggedIn ? 'logout' : 'login'}`}>
                        <Nav.Link>{isLoggedIn ? "Logout" : "Login"}</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    )
}
