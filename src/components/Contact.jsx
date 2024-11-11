import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Button from './Button'
import Card from './Card'

function Contact() {
  const [message, setMessage] = useState('')

  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])


  function onChange(e){
    setMessage(e.target.value)
  }

  return (
    <>
      <div className="dark-overlay d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <Card variant={'feature'}>
                  <h3 className='text-uppercase mb-5 mt-4'>opening hours</h3>
                  
                  <div className="schedule d-flex justify-content-between">
                    <h4 className='text-uppercase'>monday</h4>
                    <p>6AM - 10PM</p>
                  </div>

                  <div className="schedule d-flex justify-content-between">
                    <h4 className='text-uppercase'>tuesday</h4>
                    <p>6AM - 10PM</p>
                  </div>

                  <div className="schedule d-flex justify-content-between">
                    <h4 className='text-uppercase'>wednesday</h4>
                    <p>6AM - 10PM</p>
                  </div>

                  <div className="schedule d-flex justify-content-between">
                    <h4 className='text-uppercase'>thursday</h4>
                    <p>6AM - 10PM</p>
                  </div>

                  <div className="schedule d-flex justify-content-between">
                    <h4 className='text-uppercase'>friday</h4>
                    <p>6AM - 10PM</p>
                  </div>

                  <div className="schedule d-flex justify-content-between">
                    <h4 className='text-uppercase'>saturday</h4>
                    <p className='text-uppercase'>closed</p>
                  </div>

                  <div className="schedule d-flex justify-content-between">
                    <h4 className='text-uppercase'>sunday</h4>
                    <p>10AM - 7PM</p>
                  </div>
              </Card>
            </div>

            <div className="col-lg-6 contact-form" data-aos="fade-up">
                <div>
                  <h2 className='text-uppercase  mt-5 mb-3'>contact us</h2>
                  <h4>#529 South Road, Edsa, Cubao</h4>
                  <h5>+63 917 000 0000</h5>
                  <h5>support@cremebrew.com</h5>
                </div>

                <div className='mt-5'>
                  <h2 className='text-uppercase message-txt'>leave us a message</h2>
                  <form>
                    <textarea name="message" id="message" rows="5" placeholder='You may give us suggestions here ...' className='form-control bg-lightning mb-4' value={message} onChange={onChange}></textarea>

                    <Button hash={`mailto:support@cremebrew.com?Subject=Suggestion to the cafe&body=${message}`} variant={'primary'}>SEND</Button>
                    
                  </form>
                </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center copyright">
              <p><a href="#home">CremeBrew</a></p>
            <p className='ml-4 mt-2'>&copy;2022 <span className='ml-1'>RMFN</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact