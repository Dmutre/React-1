import React, { useState } from 'react';
import { FaBasketShopping } from "react-icons/fa6";
import Order from './Order';

const ShowOrders = ({props}) => {
  return (<div>
    {props.orders.map(el => (
      <Order key={el.id} item={el}/>
    ))}
  </div>);
}

const ShowNothing = () => {
  return(<div className='empty'>
    <h2>Товарів немає</h2>
  </div>);
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>About us</li>
          <li>Contacts</li>
          <li>Profile</li>
        </ul>
        <FaBasketShopping onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ?
            <ShowOrders props={props}/> : <ShowNothing />}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  )
}
