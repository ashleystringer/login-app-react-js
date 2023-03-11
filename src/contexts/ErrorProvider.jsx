import React, { useContext, useState } from 'react'

const ErrorContext = React.createContext();

export function useError(){
    return useContext(ErrorContext);
}

export function ErrorProvider({ children }) {

    const [messages, setMessages] = useState([]);


    function addError(msg){
        setMessages(prevMsg => {
            return [...prevMsg, msg];
        });
    };

    function clearErrors(){
        setMessage(null);
    }

    

    const value = {
        messages,
        setMessages,
        addError,
        clearErrors
    };

    return (
        <ErrorContext.Provider value={value}>
            {children}
        </ErrorContext.Provider>
    )
}
