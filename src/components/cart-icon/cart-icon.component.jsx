import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

import ShoppingIcon from '../../assets/shopping-bag.svg?react';

const CartIcon = () => {
  const { isOpen, setIsOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsOpen(!isOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
