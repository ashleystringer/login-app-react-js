import React, { useContext, useState } from 'react'
import { useError } from '../contexts/ErrorProvider';

const UserContext = React.createContext();

export function useUser(){
    return useContext(UserContext);
}

export function UserProvider({ children }) {

    const { messages, addError } = useError(); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);


    /*
        API request for retrieving content (later) 
    */

    /*
        API request for adding content (later)
    */

    function getUser(user){
        const { username, email, password } = user;

        console.log(`username: ${username}, email: ${email}, password: ${password}`);

        //Error can be thrown
        //addError();
    }

    function createUser(user){
        const { username, email, password } = user;

        let usrFind, emFind, pwFind;

        console.log(`username: ${username}, email: ${email}, password: ${password}`);

        //Error can be thrown

        /*
        usrFind = array.find(e => e === username);
        */
        /*
        emFind = array.find(e => e === emFind);
        */
        /*
        pwFind = array.find(e => e === password);
        */

        //addError();
    }

    function loginUser(user){
        const { username, password } = user;

        //search for username
        console.log(`username: ${username}, password: ${password}`);
        //search for password


        /*
        usrFind = array.find(e => e === username);
        */
        /*
        pwFind = array.find(e => e === password);
        */

        /*let usr;
        let pw;

        setUsername(prev => {
            if(usr) return usr;
            return null;
        });

        setPassword(prev => {
            if(pw) return pw;
            return null;
        });*/
        /*
        find username
        find password
        if they exist
            set the state for both
        */

        //Find email
        //Error can be thrown

        //Find username
        //Error can be thrown

        //Find password
        //Error can be thrown

        if(messages.length === 0){
            setUsername(username);
            setPassword(password);
            setIsLoggedIn(true);
        }

        //None of the above can happen if there are errors.
    }

    const value = {
        isLoggedIn,
        setIsLoggedIn,
        email,
        setEmail,
        username,
        setUsername,
        password,
        setPassword,
        getUser,
        createUser,
        loginUser
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
