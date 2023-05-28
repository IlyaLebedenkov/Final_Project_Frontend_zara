import React, { useState } from 'react';
import HeaderMenu from './HeaderMenu';
import ProductItem from './ProductItem';
import { productTshirt, productShoes, productJeans } from './ProductBase';
import withLogger from './withLogger';

const ProductList = ({ addToCart }) => {
  const [isShowingAll, setIsShowingAll] = useState(false);
  const [isShowingTshirt, setIsShowingTshirt] = useState(false);
  const [isShowingJeans, setIsShowingJeans] = useState(false);
  const [isShowingShoes, setIsShowingShoes] = useState(false);

  const handleAddToCart = (product) => {
    // Получение текущих данных из localStorage (если они есть)
    const existingCartItems = localStorage.getItem('cartItems');
    const cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];

    // Добавление нового товара в корзину
    cartItems.push(product);

    // Сохранение данных в localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const showAll = () => {
    setIsShowingAll(!isShowingAll);
  };

  const showTshirt = () => {
    setIsShowingTshirt(!isShowingTshirt);
  };

  const showJeans = () => {
    setIsShowingJeans(!isShowingJeans);
  };

  const showShoes = () => {
    setIsShowingShoes(!isShowingShoes);
  };

  return (
    <div className='container'>
      <HeaderMenu />
      <div className='container mt-5 mb-5'>
        <div className='container mt-5 mb-5'>
          <button className='btn btn-dark' style={{ marginRight: '5%' }} onClick={showAll}>
            {isShowingAll ? 'HIDE ALL' : 'SHOW ALL'}
          </button>
          <button className='btn btn-dark' style={{ marginRight: '5%' }} onClick={showTshirt}>
            {isShowingTshirt ? 'HIDE TSHIRT' : 'SHOW TSHIRT'}
          </button>
          <button className='btn btn-dark' style={{ marginRight: '5%' }} onClick={showShoes}>
            {isShowingShoes ? 'HIDE SHOES' : 'SHOW SHOES'}
          </button>
          <button className='btn btn-dark' onClick={showJeans}>
            {isShowingJeans ? 'HIDE JEANS' : 'SHOW JEANS'}
          </button>
        </div>

        <div className='row'>
          {isShowingAll && (
            <>
              <div className='container mt-5 mb-5'>
                <div className='row'>
                  {productTshirt.map((product) => (
                    <div className='col-md-4' key={product.id}>
                      <ProductItem product={product} addToCart={handleAddToCart} />
                    </div>
                  ))}
                </div>
              </div>
              <div className='container mt-5 mb-5'>
                <div className='row'>
                  {productShoes.map((product) => (
                    <div className='col-md-4' key={product.id}>
                      <ProductItem product={product} addToCart={handleAddToCart} />
                    </div>
                  ))}
                </div>
              </div>
              <div className='container mt-5 mb-5'>
                <div className='row'>
                  {productJeans.map((product) => (
                    <div className='col-md-4' key={product.id}>
                      <ProductItem product={product} addToCart={handleAddToCart} />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {isShowingTshirt &&
            productTshirt.map((product) => (
              <div className='col-md-4' key={product.id}>
                <ProductItem product={product} addToCart={handleAddToCart} />
              </div>
            ))}

          {isShowingShoes &&
            productShoes.map((product) => (
              <div className='col-md-4' key={product.id}>
                <ProductItem product={product} addToCart={handleAddToCart} />
              </div>
            ))}

          {isShowingJeans &&
            productJeans.map((product) => (
              <div className='col-md-4' key={product.id}>
                <ProductItem product={product} addToCart={handleAddToCart} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default withLogger(ProductList);



