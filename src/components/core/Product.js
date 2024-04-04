import React from 'react'
import logo from "../../assets/images/trending6house12.webp"

export const Product = ({image, area}) => {
    return (
        <React.Fragment>
            <a>
            <div class="product-card">
                <img src={image} alt="Product Image" class="product-img img-fluid my-width-50-img" />
                    <div class="product-info">
                        <h2 class="product-title">{area}</h2>
                    </div>
            </div>

            </a>
            
        </React.Fragment>
    )
}
