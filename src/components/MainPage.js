import React from 'react';
import HeaderMenu from './HeaderMenu';

export default function MainPage() {
  return (
    <div className='container'>
    <HeaderMenu/>
    <div className='container mt-5 mb-5'>
    <div id="carouselExample" class="carousel slide pt-5 pb-5" style={{width:'100%'}}>
      <div class="carousel-inner" style={{borderRadius:'150px'}}>
      <div class="carousel-item active">
      <img src="https://resources.cdn-kaspi.kz/img/m/p/h25/h27/64376206032926.jpg?format=preview-large" class="d-block w-100" alt="..." style={{marginLeft:'30%'}}></img>
      <div class="carousel-caption">
      <h1 style={{marginBottom:'15%',fontFamily:'Manrope',caretColor:'transparent'}}>Tshirts</h1>
      </div>
      </div>
      <div class="carousel-item">
      <img src="https://www.dhresource.com/0x0/f2/albu/g21/M00/C3/39/rBNaOWFyhaWAP5_GAAEi8ENvliE57.jpeg" class="d-block w-100" alt="..." style={{marginLeft:'30%'}}></img>
      <div class="carousel-caption">
      <h1 style={{marginBottom:'15%',fontFamily:'Manrope',caretColor:'transparent'}}>Shoes</h1>
      </div>
      </div>
      <div class="carousel-item">
      <img src="https://ae04.alicdn.com/kf/S63cdefac5fa744d695cbda42e9c21f73X.jpg" class="d-block w-100" alt="..." style={{marginLeft:'30%'}}></img>
      <div class="carousel-caption">
      <h1 style={{marginBottom:'15%',fontFamily:'Manrope',caretColor:'transparent'}}>Jeans</h1>
      </div>
      </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
      </button>
      </div>
    </div>
    
    <div className="container mt-5 mb-5">
  <div className="row">

    <div className="col-md-6">
      <div className="row border pb-4 pt-4" style={{ marginRight: '10px' }}>
        <div className="col-md-6">
          <h2 style={{ textAlign: 'left', marginLeft: '20px', caretColor: 'transparent' }}>Calvin Klein</h2>
          <p style={{ textAlign: 'left', marginLeft: '20px', caretColor: 'transparent' }}>2400 tng</p>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src="https://media.frgroup.kz/images/70/a5/f51528de6109aa59b5ce776dff7a.jpg" alt="Картинка 1" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '200px', caretColor: 'transparent' }} />
        </div>
        <a href="/ProductList" className="btn btn-primary mr-md-2" style={{ width: '150px', marginLeft: '30px', color: 'rgb(60, 179, 113)', background: '#FFF', borderColor: 'rgb(60, 179, 113)' }}>BUY</a>
        </div>
    </div>

    <div className="col-md-6">
      <div className="row border pb-4 pt-4" style={{ marginLeft: '10px' }}>
        <div className="col-md-6">
          <h2 style={{ textAlign: 'left', marginLeft: '20px', caretColor: 'transparent' }}>White Thisrt</h2>
          <p style={{ textAlign: 'left', marginLeft: '20px', caretColor: 'transparent' }}>1500 tng</p>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src="https://images.satu.kz/48208154_w640_h640_futbolka-belaya.jpg" alt="Картинка 2" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '200px', caretColor: 'transparent' }} />
        </div>
        <a href="/ProductList" className="btn btn-primary mr-md-2" style={{ width: '150px', marginLeft: '30px', color: 'rgb(60, 179, 113)', background: '#FFF', borderColor: 'rgb(60, 179, 113)' }}>BUY</a>
      </div>
    </div>
    
    <div className="col-md-6">
      <div className="row border pb-4 pt-4" style={{ marginRight: '10px' }}>
        <div className="col-md-6">
          <h2 style={{ textAlign: 'left', marginLeft: '20px', caretColor: 'transparent' }}>Calvin Klein Pink</h2>
          <p style={{ textAlign: 'left', marginLeft: '20px', caretColor: 'transparent' }}>1000 tng</p>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src="https://ae01.alicdn.com/kf/H22f6960e815a4775a84cb36af21814d5O.jpg" alt="Картинка 1" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '200px', caretColor: 'transparent' }} />
        </div>
        <a href="/ProductList" className="btn btn-primary mr-md-2" style={{ width: '150px', marginLeft: '30px', color: 'rgb(60, 179, 113)', background: '#FFF', borderColor: 'rgb(60, 179, 113)' }}>BUY</a>
        </div>
    </div>

    <div className="col-md-6">
      <div className="row border pb-4 pt-4" style={{ marginLeft: '10px' }}>
        <div className="col-md-6">
          <h2 style={{ textAlign: 'left', marginLeft: '20px', caretColor: 'transparent' }}>Blue Thisrt</h2>
          <p style={{ textAlign: 'left', marginLeft: '20px', caretColor: 'transparent' }}>1350 tng</p>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src="https://mayki.kz/catalog_img/884485/manshort/2_3_zoom.png" alt="Картинка 2" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '200px', caretColor: 'transparent' }} />
        </div>
        <a href="/ProductList" className="btn btn-primary mr-md-2" style={{ width: '150px', marginLeft: '30px', color: 'rgb(60, 179, 113)', background: '#FFF', borderColor: 'rgb(60, 179, 113)' }}>BUY</a>
      </div>
    </div>
  </div>
</div>






    </div>
  )
}
