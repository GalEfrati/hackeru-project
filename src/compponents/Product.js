import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export function Product(props) {

    const navigate = useNavigate();

    const addItem = (item)=>{
        const activeUser = props.profile;
        activeUser.cart.push(item);
        props.setProfile(activeUser);
        props.setChange(true);
    }

    return (props.result.map((item) =>
        
        <div className="product" key={item.id}>
            <img className='product-picture' src={require('./images/product-images/'+item.picture)} alt={item.pictureText} />
            <div className="product-info">{item.description}</div>
            <div className="product-info">{item.price}</div>
            <button type="button"  onClick={()=>navigate(`/Product${item.id}`)}>more info</button>
            <button type="button" className="add-to-cart" onClick={()=>addItem(item)}>🛒add to cart</button>
        </div>
    )
    );
}

// const userList = JSON.parse(localStorage.getItem('user-information'));
// userList[props.profile.userid].cart.push(item)
// window.localStorage.setItem('user-information',JSON.stringify(userList))