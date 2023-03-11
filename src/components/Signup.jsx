import React, { useRef } from 'react'
import { Form, Stack, Row, Col, Button } from 'react-bootstrap';
import { useUser } from '../contexts/UserProvider';
import { useNavigate } from 'react-router-dom';
import { useError } from '../contexts/ErrorProvider';


export default function Signup() {

    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const { createUser, loginUser } = useUser();
    const { messages } = useError();
    const navigate = useNavigate();


    function handleSubmit(e){
        e.preventDefault();

        //createUser

        const user = {
            email: emailRef.current.value,
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };

        signUp(user);

        if(messages.length === 0){
            navigate("/success"); //This cannot happen if there's at least one error.
        }
    }

    function signUp(user){
        createUser(user); //from UserProvider
        loginUser(user); //from UserProvider
        //Errors can be thrown for either method above
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Stack gap={2} className="col-md-5 mx-auto">
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type='text' ref={emailRef}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control required type='text' ref={usernameRef}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type='password' ref={passwordRef}/>
                    </Form.Group>
                    <Button type='submit'>Log In</Button>
                </Stack>
            </Form>
        </>
    )
}
