import { useContext } from 'react';
import { useNavigate } from 'react-router';

import './cart-dropdown.styles.scss';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate('/checkout')
  }
  
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button onClick={checkoutHandler}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
