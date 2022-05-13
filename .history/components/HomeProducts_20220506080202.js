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
        <br></br>
        <img loading='lazy' className='iPhone-image mt-5' src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-3.jpg"></img>
        </div>
        <br></br>
        <div className='bg-black text-white' data-aos="zoom-in-down">
            <br></br>
            <br></br>
            <h1 className='text-6xl font-semibold text-center mt-12'> iPhone 12 pro</h1>
            <h1 className='text-3xl font-normal mt-5 text-center'>It's a leap year</h1>
            <h1 className='mt-3 text-center text-gray-500'>From $666.99 before tade-in<br></br>No payments for 6 months</h1>
            <div className=' text-center mt-5 text'>
            <span className='mr-5 text-blue-600 hover:border-b-2 border-blue-600'> Learn More</span>
            <span className='mr-5 text-blue-600 hover:border-b-2 border-blue-600'>Buy</span>
        </div>
            <img loading='lazy' className='iPhone-max-image' src='https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg'></img>
        </div>
        <br></br>
        <div className='bg-black text-white' data-aos="zoom-in-down">
            <br></br>
            <br></br>
            <h1 className='text-6xl font-semibold text-center mt-12'> iPad Pro</h1>
            <h1 className='text-3xl font-normal mt-5 text-center'>Supercharged with the M1 Chip</h1>
            <h1 className='mt-3 text-center text-gray-500'><br></br> from $1295.99</h1>
            <div className=' text-center mt-5 text'>
            <span className='mr-5 text-blue-600 hover:border-b-2 border-blue-600'> Learn More</span>
            <span className='mr-5 text-blue-600 hover:border-b-2 border-blue-600'>Buy</span>
        </div>
            <img loading='lazy' className='iPhon-max-image' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-og-202104?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1618674417000'></img>
        </div>

        <br></br>
        <div  className='flex'>
            <img loading='lazy' className='grid-image' src="https://3.img-dpreview.com/files/p/E~C155x180S1274x717T1200x675~articles/0580434619/WWDC_Hero.jpeg"></img>
            <img loading='lazy' className='grid-image' src="https://i.guim.co.uk/img/media/9556e63b3bea1476e3f4d0e1d6a9d851a93af383/120_0_3600_2161/master/3600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=29eeb135ebcc60797e334d779a210dab"></img>
        </div>
        <br></br>
        <div  className='flex'>
            <img loading='lazy' className='grid-image' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK0W3?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1618028904000"></img>
            <img loading='lazy' className='grid-image' src="https://i.guim.co.uk/img/media/9556e63b3bea1476e3f4d0e1d6a9d851a93af383/120_0_3600_2161/master/3600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=29eeb135ebcc60797e334d779a210dab"></img>
        </div>

    </div>
  )
}

export default HomeProducts