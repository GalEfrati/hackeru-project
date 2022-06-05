import React from "react";
import { SearchBar } from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { LoginButton } from "./LoginButton";
export function TopBar(props) {

    const navigate = useNavigate();
    
    return (
        <header id="top-bar">
            <img id = 'logo' src={require("./images/Logo2.jpg")} alt= "alt" onClick={()=> navigate("/")} />
            {props.profile !=null && props.profile.userType == "admin"? 
            <button onClick={()=> navigate("/NewProduct")}>add product</button>:
            null }
            <SearchBar search ={props.search} setSearch = {props.setSearch} posable = {props.posable} setPosable = {props.setPosable} result ={props.result} setResult={props.setResult} productData={props.productData} setProductData={props.setProductData}/>
            <LoginButton profile = {props.profile} setProfile = {props.setProfile} userData={props.userData} setUserData={props.setUserData}/>
        </header>
    );

}