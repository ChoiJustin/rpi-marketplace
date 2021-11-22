import React from 'react'
import Textbook from '../../images/Logo.png'
import './index.scss'


const Product = () => {
    return (
        <div className={'product'}>
            <div className={'product_info'}>
                <p>Intro to SOLID Design Principles</p>
                <p className={'product_price'}>
                    <small>$</small>
                    <strong>29.99</strong>
                </p>
            </div>
            <img src={Textbook} alt='' id={'textbook'} />
            <button> Buy Now </button>
        </div>
    )
}

export default Product