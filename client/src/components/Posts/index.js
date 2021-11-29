import React from 'react'
import Product from '../Products'
import './index.scss'

const Posts = () => {
    return (
        <div className={'posts'}>
            <div className={'posts_container'}>
                <div className={'posts_row'}>
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className={'posts_row'}>
                    <Product />
                    <Product />
                </div>
                <div className={'posts_row'}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className={'posts_row'}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Posts