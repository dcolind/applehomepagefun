import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

function HomeProducts() {
    useEffect(() => {
        Aos.init({ duration: 3000})
        
        } [])
    },
    )
  return (
    <div>

        {/* iphone */}
        <div className='grey-background'>
        <h1 className='text-6xl font-semibold text-center mt-20 '>iPhone 12</h1>
        <h1 className='text-4xl font-normal mt-5 text-center'>Yeah its fast</h1>
        <h1 className='mt-3 text-center'>From 899.00</h1>
        <img loading='lazy' className='iPhone-image' src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-3.jpg"></img>
        </div>
    </div>
  )
}

export default HomeProducts