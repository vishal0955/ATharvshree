import React from 'react'

const About = () => {
    return (
        <React.Fragment>
            <div className='about'>

                <div className='about-item-1'>
                    <img src="https://www.bungalowmakers.com/front/images/about-img.webp" alt="" className='w-100'/>

                    <div className='about-exp'>
                        <h4 className='text-center'>8+</h4>
                        <p>Years of Expertise</p>
                    </div>
                </div>

                <div className='about-item-2 custom-pl'>

                    <h4 className='about-section'>India’s Leading Architectural and Interior Design Company</h4>
                    <p>Bungalow Makers are the Best Designation For Your Dream House. With more than 8 years of expertise in offering all kinds of architectural and interior services, we are the perfect one-stop shop for all your house design needs. Our expert interior designer team can provide you with any customized house design services you need, including working drawings, floor plans, 3D elevation designs, structure drawings, and many more.
                        Our skilled team of interior designers and architecture engineers get the best work together to create your dream home design into reality. Our top-tier architects team up to provide you with top-notch designs that are considerate of the environment and Vastu. Most importantly, we serve the needs of our designs at affordable prices.</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About