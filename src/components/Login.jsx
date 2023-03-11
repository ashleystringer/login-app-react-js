import React, { useRef } from 'react'
import { Form, Stack, Row, Col, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';
import { useError } from '../contexts/ErrorProvider';


export default function Login() {

    const usernameRef = useRef();
    const passwordRef = useRef();

    const { loginUser } = useUser();
    const { messages } = useError();
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };

        loginUser(user); //from UserProvider

        if(messages.length === 0){
            navigate("/success"); //This cannot happen if there's at least one error.
        }

    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Stack gap={2}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control required type='text' ref={usernameRef}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type='password' ref={passwordRef}/>
                </Form.Group>
                <Button type='submit'>Log In</Button>
                <Link to="/register">
                    <Button>Register</Button>
                </Link>
                </Stack>
            </Form>
        </>
    )
}
