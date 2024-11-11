import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Review from "./Review";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Testimonials() {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <>
    <div className="mx-auto" data-aos="zoom-in">
      <div className="heading text-center">
        <h4 className='text-uppercase'>reviews</h4>
        <h2>Hear from our regular customers</h2>
      </div>
    </div>
    
    <div className="review-slider" data-aos="fade-left">

      <Slider {...settings}>
          <Review text={'I really love this coffee shop! Their blends always never disappoint. Also the fact that they give free espresso every Friday really cheers me up when I take it after work.'} />
          <Review text={'This is the best spot to relax after a long day at school! They serve the best pastries and coffee in town. Highly recommend!'} />
          <Review text={'I love how the coffee shop gives off a relaxing ambiance. The location is also ideal for me since its near the school. It\'s very great!'} />
          <Review text={'I never tasted a slice of Cheese Cake that\'s better than CremeBrew\'s. They have this distinct flavor in their pastries. Love it!'} />
          <Review text={'I adore this coffee spot so much not only because of the popular Cheese Cake but also because of how nice their people are. They always greet us with a smile!'} />
          <Review text={'For students like me and my friends this is our go to after exams. CremeBew has a relaxing vibe and at the same time they have reasonable prices. Very budget friendly!'} />
          <Review text={'I\'ve been drinking CremeBrew\'s Vanilla Frappuccino ever since they opened near our school and it\'s the best frappe ever! Definitely recommended!'} />
          <Review text={'Everything is perfect in this place. Not to mention their free Espresso every Friday! It\'s indeed a great way to brighten up the customers\' day. '} />

      </Slider>
    </div>

    </>
  )
}

export default Testimonials