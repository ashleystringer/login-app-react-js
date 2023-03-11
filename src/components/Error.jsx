import React, { useState, useEffect } from 'react';
import { Form, Stack, Row, Col, Button, Alert } from 'react-bootstrap';
import { useError } from '../contexts/ErrorProvider';

export default function Error() {
    //const [] = useState([]); 
    const [msgsExist, setMsgsExist] = useState(false); 
    const { messages } = useError(); 

    useEffect(() => {
        //Do somthing here
        //Add or take away error messages 
        //If there are none, don't display alert

        if(messages.length == 0){
            setMsgsExist(false);
        }else{
            setMsgsExist(true);
        }


    }, [messages]);

    
    /*
        <ul>
            messages.map(msg => {
                //<li>{msg}</li>
            });
        </ul>
    */

    const alertBox = (
        <>
            <Alert variant="danger">
                <ul>
                    {messages.length > 0 && messages.map(msg => {
                        <li>{msg}</li>
                    })}
                </ul>
            </Alert>
        </>
    ); 

    return (
        <div>
            {msgsExist ? alertBox : ""}
        </div>
    )
}
