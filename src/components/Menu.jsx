import { useState, useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'
import Category from "./Category"
import MenuItem from "./MenuItem"
import category1 from '../assets/img/category1.jpg'
import category2 from '../assets/img/category2.jpg'
import category3 from '../assets/img/category3.jpg'

function Menu() {
  const [selected, setSelected] = useState('coffee')
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
    <>
      <div className="container d-flex justify-content-center" data-aos="zoom-in">
        <div className="col">

          <div className="heading text-center" data-aos="zoom-in">
              <h4 className='text-uppercase'>what's</h4>
              <h2>In store for you</h2>
          </div>

          <div className="categories d-flex justify-content-between w-100 pt-4" data-aos="zoom-in" data-aos-duration="3500">
            <div className="col-4 rounded" onClick={()=> setSelected('coffee')}>
              <Category bgImg={category1} text='coffee' />
            </div>

            <div className="col-4 rounded"  onClick={()=> setSelected('pastry')}>
              <Category bgImg={category2} text='pastry' />
            </div>

            <div className="col-4 rounded"  onClick={()=> setSelected('sandwich')}>
              <Category bgImg={category3} text='sandwich' />
            </div>
          </div>

          <div className={`row d-${selected === 'coffee' ? 'flex' : 'none'} flex-row mt-5 justify-content-center`}>
            <div className="col-lg-5">
              <MenuItem name={'latte'} price={150} description={'Freshly brewed coffee and steamed milk'} top={true} />
              <MenuItem name={'hazelnut latte'} price={150} description={'Espresso with steamed milk and hazelnut syrup'} />
              <MenuItem name={'espresso'} price={160} description={'Concentrated coffee with CremeBrew\'s signature flavor'} />
              <MenuItem name={'americano'} price={100} description={'Espresso and hot water'} />
              <MenuItem name={'mocha'} price={165} description={'Espresso with steamed milk, whip, and chocolate flavor'} />
              <MenuItem name={'cappuccino'} price={120} description={'Espresso and equal proportions of steamed milk and foam'} />
            </div>
            <div className="offset-lg-1 col-lg-5">
            <MenuItem name={'caramel macchiato'} price={135} description={'Espresso, steamed milk, and CremeBrew\'s caramel'} />
              <MenuItem name={'white choco mocha'} price={150} description={'Espresso, steamed milk, white chocolate and whip'} />
              <MenuItem name={'salted caramel frappesso'} price={180} description={'Espresso, milk with CremeBrew\'s salted caramel syrup, and whipped cream'} top={true} />
              <MenuItem name={'cookie caramel frappesso'} price={190} description={'Espresso, milk, cream and cookie bits, and whipped cream'} top={true} />
              <MenuItem name={'vanilla frappesso'} price={150} description={'Espresso, milk with CremeBrew\'s signature vanilla, and whipped cream'} />
              <MenuItem name={'mocha frappesso'} price={180} description={'Espresso, milk with CremeBrew\'s mocha, and whipped cream'} />
            </div>
          </div>

          <div className={`row d-${selected === 'pastry' ? 'flex' : 'none'} flex-row mt-5 justify-content-center`}>
            <div className="col-lg-5">
              <MenuItem name={'croissant'} price={65} />
              <MenuItem name={'Muffin'} price={45} />
              <MenuItem name={'Cheese Cake'} price={150} top={true}  />
              <MenuItem name={'Eclair'} price={100} top={true}  />
              <MenuItem name={'Pretzel'} price={55} />
              <MenuItem name={'Cinnamon Bun'} price={150} />
            </div>
            <div className="offset-lg-1 col-lg-5">
            <MenuItem name={'Tiramisu'} price={120} top={true}  />
              <MenuItem name={'Waffles'} price={55} />
              <MenuItem name={'Oatmeal Cookie'} price={150}/>
              <MenuItem name={'chocolate chip cookie'} price={35}/>

            </div>
          </div>

          <div className={`row d-${selected === 'sandwich' ? 'flex' : 'none'} flex-row mt-5 justify-content-center`}>
            <div className="col-lg-5">
              <MenuItem name={'Bacon & Cheese'} price={50} />
              <MenuItem name={'Beef Burger'} price={100} top={true} />
              <MenuItem name={'Club'} price={250} top={true}/>
              <MenuItem name={'Ham & Egg'} price={40} />
              <MenuItem name={'Veggie'} price={70} />
              <MenuItem name={'Spicy Tuna'} price={150} />
            </div>
            <div className="offset-lg-1 col-lg-5">
            <MenuItem name={'Salami'} price={65} />
              <MenuItem name={'Waffles'} price={50} />
              <MenuItem name={'Meatball Burger'} price={150} top={true}/>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu