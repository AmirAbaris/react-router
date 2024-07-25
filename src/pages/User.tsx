import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
    const param = useParams<{ userId: string }>();
    
    return (
        <div>
            <h1>User Details {param.userId}</h1>
        </div>
    );
}

export default User;
