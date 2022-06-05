import React from "react";
import {LogIn} from "../compponents/LogIn"

export function LogInPage(props){
    return(
        <LogIn  change={props.change} setChange={props.setChange} userData={props.userData} setUserData={props.setUserData}  profile ={props.profile} setProfile ={props.setProfile}/>
    );
}
