import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export function LogIn(props) {
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");

    let navigate = useNavigate();

    const validation = (e) => {
        let success = false;
        e.preventDefault();
        console.log(props.userData);
        props.userData.map((user) => {
            if (userName === user.userName && password === user.password) {
                props.setProfile(user);
                props.setChange(true);
                success=true;
                navigate('/');
            }
        }

        );
        if (success) {
            alert("login successful");
        }
        else {
            alert("user name or password are wrong");
        }

    }
    return (

        <>
            <form onSubmit={validation}>
                <div>
                    <label htmlFor="username">User name</label>
                    <input type="text" id="username" autoComplete='off' onChange={(e) => setUserName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <input type="submit"></input>
            </form>
        </>
    );
}


