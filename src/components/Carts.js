import React, { useEffect, useState } from 'react';
import HeaderMenu from './HeaderMenu';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Получение данных из localStorage
    const existingCartItems = localStorage.getItem('cartItems');
    if (existingCartItems) {
      setCartItems(JSON.parse(existingCartItems));
    }
  }, []);

  const clearCart = () => {
    // Очистка корзины путем удаления данных из localStorage
    localStorage.removeItem('cartItems');
    setCartItems([]);
  };

  // Вычисление общей суммы цен всех элементов в корзине
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className='container'>
      <HeaderMenu />
      <div className='container'>
        <h2>Cart</h2>
        {cartItems.length > 0 ? (
          <div className='row'>
            {cartItems.map((item) => (
              <div className='col-md-4' key={item.id}>
                <div className='card mb-4'>
                  <div className='card-body'>
                    <h5 className='card-title'>{item.name}</h5>
                    <h5 className='card-title'>{item.price}</h5>
                  </div>
                </div>
              </div>
            ))}
            <div className='col-12'>
              <p>Total Price: {totalPrice}</p>
              <button className='btn btn-danger' onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;

