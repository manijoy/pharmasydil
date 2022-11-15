import React, { Component } from 'react';
import Product from './Product';

export default function Body(props) {
    const {products,onAdd} = props;
    return (
        <main className='block col-2'>
            <h5>
                products
            </h5>
            <div className='row'>
                {products.map((product) => (
                    <Product key={product.id} product={product}  onAdd={onAdd}   ></Product>
                ))}
            </div>
        </main>
    );
}