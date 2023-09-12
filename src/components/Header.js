import React, { useState } from 'react';
import { FaBasketShopping } from "react-icons/fa6";
import Order from './Order';

const ShowOrders = ({props}) => {
  let total = 0;
  props.orders.forEach(el => total += el.price);
  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el}/>
    ))}
    <p className='total'>Total: {new Intl.NumberFormat().format(total)}</p>
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
