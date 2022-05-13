import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function HomeProducts() {

    useEffect(() => {
        Aos.init({ duration: 3000 })
        }, [])


  return (
    <div>

        {/* iphone */}
        <div className='grey-background' data-aos="flip-down">
        <h1 className='text-6xl font-semibold text-center mt-20 '>iPhone 12</h1>
        <h1 className='text-4xl font-normal mt-5 text-center'>Yeah its fast</h1>
        <h1 className='mt-3 text-center'>From 899.00</h1>
        <div className='flex flex-row'>
            <h1 className='mr-5 text-'> Learn More</h1>
            <h1>Buy</h1>
        </div>

        <img loading='lazy' className='iPhone-image' src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-3.jpg"></img>
        </div>
    </div>
  )
}

export default HomeProducts