import React, { useEffect } from "react";

export function CartList(props){
    return (<>{
    props.profile.cart.length === 0?
    <div>no items</div>:
    props.profile.cart.map((item) =>
        
        <div className="product"  key={item.id}>
            <img className='product-picture' src={require('./images/product-images/'+item.picture)} alt={item.pictureText} />
            <div className="product-info">{item.description}</div>
            <div className="product-info">{item.price}</div>
        </div>
    )
    }</>);
}