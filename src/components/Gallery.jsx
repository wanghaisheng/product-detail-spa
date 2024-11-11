import pic1 from '../assets/img/gallery1.jpg'
import pic2 from '../assets/img/gallery2.jpg'
import pic3 from '../assets/img/gallery3.jpg'
import pic4 from '../assets/img/gallery4.jpg'
import pic5 from '../assets/img/gallery5.jpg'
import pic6 from '../assets/img/gallery6.jpg'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Gallery() {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
    <>
      <div className="mx-auto" data-aos="zoom-in">
      <div className="heading text-center">
        <h4 className='text-uppercase'>gallery</h4>
        <h2>Snapshots from our coffee shop</h2>
      </div>
    </div>

    <div className="container" data-aos="zoom-in">

    <div className="row py-5">
      <div className="col-lg-3 d-flex flex-column justify-content-between">
        <a href={pic1} data-toggle="lightbox" data-gallery="img-gallery">
          <img src={pic1} alt="gallery" className='img-fluid rounded zoom' />  
        </a>

        <a href={pic2} data-toggle="lightbox" data-gallery="img-gallery">
          <img src={pic2} alt="gallery" className='img-fluid rounded zoom' />  
        </a>
      </div>
      <div className="col-lg-3">
        <a href={pic3} data-toggle="lightbox" data-gallery="img-gallery">
          <img src={pic3} alt="gallery" className='img-fluid rounded zoom' />
        </a>
      </div>
      <div className="col-lg-3 d-flex flex-column justify-content-between">
        <a href={pic4} data-toggle="lightbox" data-gallery="img-gallery">
          <img src={pic4} alt="gallery" className='img-fluid rounded zoom' />  
        </a>

        <a href={pic5} data-toggle="lightbox" data-gallery="img-gallery">
          <img src={pic5} alt="gallery" className='img-fluid rounded zoom' />  
        </a>
      </div>
      <div className="col-lg-3">
        <a href={pic6} data-toggle="lightbox" data-gallery="img-gallery">
          <img src={pic6} alt="gallery" className='img-fluid rounded zoom' /> 
        </a> 
      </div>
    </div>
    </div>
    </>
  )
}

export default Gallery