import React from "react";
import { useEffect } from "react";
import { Product } from "../compponents/Product";

export function SearchResult(props) {
    useEffect(() => {
        console.log(props.profile)
    }, [props.profile]);
    return (
        
        <div id="product-conteiner">
            {props.result.length ===0? <div>no results</div>:null}
            <Product result={props.result} posable={props.posable} change={props.change} setChange={props.setChange} profile={props.profile} setProfile={props.setProfile}/>
        </div>
    );
}