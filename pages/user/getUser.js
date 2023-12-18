import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';

export default function GetUser (){
    const router = useRouter();
    const [userDetails, setUserDetails] = useState({});
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    

    async function getUser(){
        fetch('/api/user/getUser', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
        .then((data) => {
            console.log(data);
            setUserDetails(data);
            setUserLoggedIn(true);
        })

    }

    return(
        <div>
            <button onClick={getUser}>Get User</button>
        </div>
    )
}