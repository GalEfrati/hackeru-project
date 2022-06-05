import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Product } from "../compponents/Product";
import * as data from "../compponents/products-list.json";

export function CategoryPage(props) {
  const { categoryName } = useParams();

  useEffect(() => {
    
    let categoryResults = [];
    
    props.setResult(categoryResults);
    data.products.map((item) => {

      if (item.category.toLocaleLowerCase() ==  categoryName.toLocaleLowerCase() ) {

        categoryResults.push(item);
        props.setResult(categoryResults);
      }
    }
    )
  }, []);

  return (
    <div id="product-conteiner">
    {props.result.length ===0? <div>no results</div>:null}
    <Product result={props.result} posable={props.posable} change={props.change} setChange={props.setChange} profile={props.profile} setProfile={props.setProfile}/>
</div>
  );
}