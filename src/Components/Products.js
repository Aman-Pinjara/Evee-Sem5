import React from 'react'
import product_card from "../data/product_data";
import "../Css/Products.css"

const Products = () => {
    const listItems = product_card.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} />
            </div>
            <div className="card_header col-lg-3">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btnProduct">see details</div> 
                
            </div>
        </div>

    );
    return (
        <div className="main_content row">
            {listItems}
        </div>

    )
}
export default Products;
