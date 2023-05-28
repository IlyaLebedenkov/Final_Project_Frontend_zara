import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className='product-item' style={{ border: '1px solid black', padding: '10px', margin: '10px'}}>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <button className='btn btn-light' onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;

