import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Confirm() {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 1500);
    }, []);

    return (
        <div>
            Signed in!
        </div>
    )
}
