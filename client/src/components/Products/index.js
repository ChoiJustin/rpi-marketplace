import React from 'react'
import Textbook from '../../images/Textbook.png'
import './index.scss'

const Product = () => {
    return (
        <div className={'product'}>
            <div className={'product_info'}>
                <p>The Lean Startup</p>
                <p className={'product_price'}>
                    <small>
                    <strong>$29.99</strong>
                    </small>
                </p>
            </div>
            <img src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg' alt=""/>
            <button> Buy Now </button>
        </div>
    )
}

export default Product
