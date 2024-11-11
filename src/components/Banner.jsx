import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Banner() {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
    <>
      <div className="dark-overlay d-flex align-items-center">
        <div className="container">
          <div className="row text-white justify-content-end px-3">
            <h1 className='text-uppercase text-right' data-aos="fade-left">we offer a free cup of espresso every friday</h1>
            <h5 className='text-right' data-aos="fade-left">We value our customers and appreciate them choosing to visit us as they wrap up their week. As a little gift, we offer a free cup of espresso every Fridays. Hopefully it helps pick you up for the upcoming week.</h5>
          </div>
        </div>

      </div>
    </>
  )
}

export default Banner