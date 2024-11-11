import Card from "./Card"
import { AiOutlineCoffee } from "react-icons/ai"
import { AiOutlineSmile } from "react-icons/ai"
import { BiCoffeeTogo } from "react-icons/bi"
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

function Features() {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (

      <div className="container" data-aos="fade-left">
        <h2 className="text-center offer mb-4">Here's what we offer</h2>
        <div className="row d-flex justify-content-around">
          
          <div className="col-md-4">
            <Card variant={'feature'}>
              <div className="card-icon mb-3">
                <AiOutlineCoffee size={60} />
              </div>
              <div className="card-title text-uppercase">customizable <span>drinks</span></div>
              <p>Let us know what you're looking for! We’ll provide you with the best blend possible</p>
            </Card>
          </div>

          <div className="col-md-4">
            <Card variant={'feature'}>
              <div className="card-icon mb-3">
                <AiOutlineSmile size={60} />
              </div>
              <div className="card-title text-uppercase">healthy <span>choices</span></div>
              <p>We choose the freshest and healthiest ingredients for our menu. It’s never been easier to stay fit while satisfying your cravings</p>
            </Card>
          </div>

          <div className="col-md-4">
            <Card variant={'feature'}>
              <div className="card-icon mb-3">
                <BiCoffeeTogo size={60} />
              </div>
              <div className="card-title text-uppercase">great <span>ambiance</span></div>
              <p>Head on over to our cafe where you'll find everything from comfy couches to free Wi-Fi and some of the best pastries in town!</p>
            </Card>
          </div>

            

      </div>
    </div>
  )
}

export default Features