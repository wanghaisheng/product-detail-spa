import aboutPic from '../assets/img/aboutpic.jpg'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'


function About() {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
    <>
      <div className="container">
        <div className="row" data-aos="fade-left">
          <div className="d-none d-lg-flex col-lg-6">
            <img src={aboutPic} alt="About cremebrew" className='img-fluid border rounded h-100' />
          </div>

          <div className="col-lg-6 my-5">
              <div className="col">
                <h3 className='mb-1'>Creme<span>Brew</span></h3>
                <h4 className='mb-4'>a new coffee experience</h4>
                <p>CremeBrew is committed to providing an authentic coffee experience that connects you with the farmers who produce it and the knowledge of our baristas who prepare it.</p>
              </div>
              <div className="col mt-5">
                <h3 className='mb-1'>Offering <span>Great Food</span></h3>
                <p>Not just your average coffee shop, we also offer delicious baked goods that are made fresh by our artisan bakers with locally sourced ingredients. And they're not just any baked goods - they're healthy breads with grains, seeds and nuts that are nutrient rich and full of flavour!</p>
              </div>
          </div>
        </div>

            </div>
    </>
  )
}

export default About