import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as data from "../compponents/products-list.json";

export function ProductPage(props) {
    const navigate = useNavigate();
    const { itemid } = useParams();
    const [displayedProduct,setDisplayedProduct] =useState();
    useEffect(() => {
        let exist = false;
        props.productData.map((item) => {
            if (item.id == itemid) {
                exist = true;
                setDisplayedProduct(item);
            }

        })
        if (!exist) {
            navigate('*')
        }
    }, [])

    return (
        <>
        {displayedProduct == null? null :
        <div id="product-page" key={displayedProduct.id}>
            <img id='product-page-picture' src={require("../compponents/images/product-images/" + displayedProduct.picture)} alt={displayedProduct.pictureText} />
            <div id="product-page-info">{displayedProduct.description}</div>
            <div id="product-page-info">{displayedProduct.price}</div>
            <button type="button" id="add-to-cart-page" onClick={() => navigate(`/Product${displayedProduct.id}`)}>🛒add to cart</button>
        </div>
        }
        </>
    )
}