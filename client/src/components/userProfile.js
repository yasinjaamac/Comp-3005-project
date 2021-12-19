import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserProfile = () => {
    const {user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <div>
            <h2>user.name</h2>
            <p>user.email</p>
            
        </div>
        )
    )
}
 
//{JSON.stringify(user,null,2)}
export default UserProfile
