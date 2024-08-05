import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setListOfUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching the user data', error);
            });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">User List</h1>
            <ul>
                {listOfUsers.map(user => (
                    <li key={user.id} className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center">
                        <img 
                            src={`https://picsum.photos/seed/${user.id}/50/50`} 
                            alt="Random User" 
                            className="rounded-full mr-4"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">{user.name}</h2>
                            <p className="text-gray-600">{user.email}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
