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
        <h1 className='mt-3 text-center text-gray-500'>From 899.00</h1>
        <div className=' text-center mt-5 text'>
            <span className='mr-5 text-blue-600 hover:border-b-2 border-blue-600'> Learn More</span>
            <span className='mr-5 text-blue-600 hover:border-b-2 border-blue-600'>Buy</span>
        </div>
        <img loading='lazy' className='iPhone-image mt-6' src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-3.jpg"></img>
        </div>
        <div className='bg-black text-white' data-aos="zoom-in-down">
            <br></br>
            <br></br>
            <h1 className='text-6xl font-semibold text-center mt-12'></h1>
            <h1 className='text-3xl font-normal mt-5 text-center'>It's a leap year</h1>
            <h1 className='mt-3 text-center text-gray-500'>From 666 before tade-in<br></br>No payments for 6 months</h1>
            <div className=' text-center mt-5 text'>
            <span className='mr-5 text-blue-600 hover:border-b-2 border-blue-600'> Learn More</span>
            <span className='mr-5 text-blue-600 hover:border-b-2 border-blue-600'>Buy</span>
        </div>
            <img loading='lazy' className='iPhon-max-image' src='https://i.guim.co.uk/img/media/a9ed586e7111048c8d4f0a85ce2ed7986da43eac/179_0_2537_1523/master/2537.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=e8e474dc59b63dc8a7f53edd8862a3e4'></img>
        </div>
        <br></br>
        <div className='bg-black text-white' data-aos="zoom-in-down">
            <br></br>
            <br></br>
            <h1 className='text-6xl font-semibold text-center mt-12'> iPad Pro</h1>
            <h1 className='text-3xl font-normal mt-5 text-center'>Supercharged with the </h1>
            <h1 className='mt-3 text-center text-gray-500'>From 666 before tade-in<br></br>No payments for 6 months</h1>
            <div className=' text-center mt-5 text'>
            <span className='mr-5 text-blue-600 hover:border-b-2 border-blue-600'> Learn More</span>
            <span className='mr-5 text-blue-600 hover:border-b-2 border-blue-600'>Buy</span>
        </div>
            <img loading='lazy' className='iPhon-max-image' src='https://i.guim.co.uk/img/media/a9ed586e7111048c8d4f0a85ce2ed7986da43eac/179_0_2537_1523/master/2537.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=e8e474dc59b63dc8a7f53edd8862a3e4'></img>
        </div>

    </div>
  )
}

export default HomeProducts