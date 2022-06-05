import React from "react";
import { useNavigate } from "react-router-dom";

export function Catagories() {
    const navigate = useNavigate();
    return (
        <div id="categoryContainer">
            <span className="imageContainer" onClick={()=>navigate("/Category/Bags")}>
                <img className="categoryImage" src={require('./images/category-bags.webp')}/>
                <div className="categoryName">
                    bags
                </div>
            </span>

            <span className="imageContainer" onClick={()=>navigate("/Category/Jewels")}>
                <img className="categoryImage" src={require("./images/category-jewels.png")}/>
                <div className="categoryName">
                    jewels
                </div>
            </span>
            
            <span className="imageContainer" onClick={()=>navigate("/Category/Clothes")}>
                <img className="categoryImage" src={require("./images/category-clothes.jpg")}/>
                <div className="categoryName">
                    clothes
                </div>
            </span>
            
        </div>
    );
}