
import Item from '../Item/Item';
import './Cart.css'
import swal from 'sweetalert';
import { useState } from 'react';
// import { useState } from 'react';


const Cart = ({ cart }) => {

    const chooseHandleButton = (cart) => {
        // console.log(cart)
        const randomItem = cart[Math.floor(Math.random() * cart.length)]
        swal("Your random selected product:", randomItem.name);
        if (randomItem) {
            return randomItem;
        }
    }

    const removeHandle = () => {
        const remove = document.getElementById('selected-item')
        remove.innerHTML = '';
        cart = [];
    }

    return (
        <div className='cart'>
            <h2>Selected Item</h2>
            {
                cart.map(cart => <Item
                    key={cart.id}
                    cart={cart}
                ></Item>)
            }
            <button onClick={() => chooseHandleButton(cart)} className='choose-btn'>
                <p>CHOOSE 1 FOR ME</p>
            </button>
            <button onClick={removeHandle} className='remove-button'>
                <p>REMOVE ALL</p>
            </button>
        </div>
    );
};

export default Cart;