import React from 'react';

const withLogger = (WrappedComponent) => {
  return (props) => {
    const addToCartWithLogging = (product) => {
      props.addToCart(product);
      console.log(`Adding ${product.name} to cart`);
    };

    const newProps = {
      ...props,
      addToCart: addToCartWithLogging,
    };

    return <WrappedComponent {...newProps} />;
  };
};

export default withLogger;
