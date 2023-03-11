import React from 'react';
import { Form, Stack, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';

export default function Logout() {

    const navigate = useNavigate();

    const {
        setEmail,
        setUsername,
        setPassword,
        setIsLoggedIn 
    } = useUser();

    /*
    logout
    */

    function handleClick(e){

        logout();
        navigate("/");
        
    }

    function logout(){
        
        setEmail(null);
        setUsername(null);
        setPassword(null); 
        setIsLoggedIn(false);

    }

    return (
        <>
            <Button onClick={handleClick}>Sign out</Button>
        </>
    )
}
