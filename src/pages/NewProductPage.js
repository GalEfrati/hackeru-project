import React from "react";

export function NewProductPage(props) {
const addProduct = (e)=>{
    e.preventDefault();
    const oldData = props.productData;


    const newProduct = {"name":e.target.name.value,
    "price" : e.target.price.value,
    "description" : e.target.description.value,
    "picture" : e.target.picturelocation.value,
    "category" : e.target.category.value,
    "pictureText": e.target.pictxt.value,
    "id" : oldData.length
}
    console.log(newProduct)
    oldData[oldData.length]=newProduct;
    console.log(oldData);
 props.setProductData(oldData);
 props.setChange(true);
}
    return (
        <>
            <form onSubmit={addProduct}>
                <div>
                    <label htmlFor="name">product name</label>
                    <input type="text" name="name" id="name" required></input>
                </div>

                <div>
                    <label htmlFor="price">product price</label>
                    <input type="number" name="price" id="price" required></input>
                </div>

                <div>
                    <label htmlFor="description">product description</label>
                    <input type="text" name="description" id="description" required></input>
                </div>

                <div>
                    <label htmlFor="picture-location">product pricture url (absolute location)</label>
                    <input type="text" name="picturelocation" id="picturelocation" required></input>
                </div>

                <div>
                    <label htmlFor="pictxt">picture description</label>
                    <input type="text" name="pictxt" id="pictxt" required></input>
                </div>

                <div>
                    <label htmlFor="category">picture description</label>
                    <input type="text" name="category" id="category" required></input>
                </div>

                <div>
                    <button type="submit">add product</button>
                </div>

            </form>
        </>
    )
}