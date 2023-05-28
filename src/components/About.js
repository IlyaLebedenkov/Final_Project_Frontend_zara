import React from 'react';
import HeaderMenu from './HeaderMenu';

const About = () => {
  return (
    <div className="container">
      <HeaderMenu/>

      <h1 style={{color:'#000'}}>Dear visitors, welcome to the ZARAshop.kz</h1>
      <div className="container mb-5 mt-5" style={{background:'#000',boxShadow:'0px 5px 5px black',width:'70%'}}>
        <h1 style={{color:'#FFF',fontFamily:'Livvic',fontSize:'50px'}}><strong>ABOUT US</strong></h1>
        </div>
        <div className="container mt-5 mb-5">
        </div>
        <div className="container" style={{background:'rgb(210, 210, 210)',width:'70%'}}>  
         <p style={{fontSize:'30px'}}>
         Welcome to ZARAshop - your source of fashionable clothes and accessories!
         ZARAshop is a premium store offering a wide selection of stylish and high-quality clothing for men, women and children. We are one of the most popular fashion brands in the world, and our goal is to help you express your individual style and create a unique image.
         At ZARAshop we offer the latest fashion trends, from classic and elegant pieces to bold and modern designs. Our team of professionals follows the latest fashion trends so that you can always find something that reflects your uniqueness and style.
         We are proud to offer a wide range of products, including dresses, suits, T-shirts, jeans, shoes, accessories and much more. Regardless of your age or preferences, we have something special for everyone.
         </p>
        </div>
        <div className="container mb-5 mt-5">
        <img src="https://www.riviera.com.ua/wp-content/uploads/2019/12/zara.jpg" alt="Картинка 2" class="img-fluid" style={{width:'1000px',height:'500px'}}/>
        </div>
        <div className="container" style={{background:'rgba(210, 210, 210)',width:'70%'}}>
         <h2><strong>Quality</strong></h2>   
         <p style={{fontSize:'30px'}}>
         Quality is one of our main principles. We carefully choose materials and provide a high level of finishing so that each item from ZARAshop not only looks amazing, but also is comfortable and durable.
         We strive to create a pleasant shopping experience for our customers. Our friendly and competent staff is always ready to help you choose the perfect thing and provide professional recommendations about style and fashionable combinations.
         </p>
        </div>
        <div className="container mb-5 mt-5 rounded-pill" style={{background:'#006BA8',width:'500px'}}>
        </div>
    </div>
  );
};

export default About;

