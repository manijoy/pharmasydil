import React, { Component } from 'react';


export default function Header(props) {
    const {countCartItems }=props;
    return (
        <header className='row block center'>
            <div>
                <center>
                    <h1>Pharmacenter</h1>
                    <h3>An online Store for all your Medicine !!!</h3>
                </center>
            </div>
            <div>
                <h3 href="#/cart">Cart Items :: </h3>
                 {' '}
                {countCartItems?(
                    <button className='badge'>{countCartItems}</button>
                ): (' ') }
                <br/><br/>
                <h4 href="#/signin"> signin</h4>

            </div>
        </header>
    );
}