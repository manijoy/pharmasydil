import React, {useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Basket from './components/Basket';
import Body from './components/Body';
import './components/index.css';
import data from './components/data';

import {BrowserRouter,Routes,Route,Link,NavLink} from 'react-router-dom';





function App () {
    const{ products }= data;
    const [cartItems,setcartItems] = useState([]);

    const onAdd= (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if(exist) {
            setcartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty +1}: x
                )
                );
        }else {
            setcartItems([...cartItems, {...product,qty : 1}]);
        }
    };

    const onRemove = (product) => {
        const exist=cartItems.find((x) => x.id === product.id);
        if(exist.qty ===1) {
            setcartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setcartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1}: x
            )
            );

        }

    }
    return (
        <center>
        <div className='App'>
            <Header countCartItems={cartItems.length}></Header>
            <div className='row'>
                <Body onAdd={onAdd}    products={products}></Body>
            </div>
            <div>
                <Basket onAdd={onAdd}  onRemove={onRemove}  cartItems={cartItems}></Basket>
            </div>
        </div>
        </center>
    );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

