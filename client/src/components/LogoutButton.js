import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Header from './header';

const  LogoutButton = () => {
    const {logout, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            
        <button onClick = {() => logout()}>
            Log Out
        </button>

        )
    )
}

// <Header/>
export default LogoutButton
