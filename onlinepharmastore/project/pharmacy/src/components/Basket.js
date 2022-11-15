import React, { Component } from 'react';


export default function Basket(props) {
    const {cartItems,onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) => a+c.price * c.qty,0);
    const taxPrice = itemsPrice *0.14;
    const shippingPrice = itemsPrice > 2000 ? 0: 50;
    const totalPrice = itemsPrice+ taxPrice+ shippingPrice;
    return (
        <aside className='block col-1'>
            <h2> cart items</h2>
            <div>
                {cartItems.length=== 0 && <div>cart Is Empty</div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id}  className="row">
                    <div className='col-2'>{item.name}</div>
                    <div  className='col-2'>
                        <button   onClick={() => onAdd(item)} className='add'>+</button>
                        <button onClick={() => onRemove(item)} className='add'>-</button>
                    </div>
                    <div className='col-2 text-right'>
                        {item.qty} X Rs {item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                <hr></hr>
                <div className='row'>
                    <div className='col-2'> Items price</div>
                    <div className='col-1 text-right'> Rs {itemsPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                    <div className='col-2'> Tax price</div>
                    <div className='col-1 text-right'> Rs {taxPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                    <div className='col-2'> Shipping price</div>
                    <div className='col-1 text-right'> Rs {shippingPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                    <div className='col-2'><strong>Total price</strong></div>
                    <div className='col-1 text-right'> <strong> Rs {totalPrice.toFixed(2)}</strong></div>
                </div>
                <hr/>
                <div className='row'>
                    <button onClick={() => alert('Implement checkout')}>
                        Checkout
                    </button>
                </div>
                </>
            )}
        </aside>
    );
}