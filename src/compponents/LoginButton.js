import React from "react";
import { useNavigate } from "react-router-dom";
export function LoginButton(props) {

    const navigate = useNavigate();

    const logout = () => {
        props.setProfile(null);
        navigate("/");
    }
    return (
        <span id="login-space">
            {
                props.profile === null ?
                    <button id="login-button" onClick={() => navigate("/Login")}>login</button> :
                    <>
                        <img id="profile-picture" src={require("" + props.profile.profilePicture)}></img>
                        <div id="profile-interface">
                            <span> hello {props.profile.userName} </span>
                            <button id='logout-button' onClick={logout}>logout</button>
                            <button id='profile-button' onClick={() => navigate(`/Profile/${props.profile.userName}`)}>profile</button>
                        </div>
                    </>
            }
        </span>
    );
}