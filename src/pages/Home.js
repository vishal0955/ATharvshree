import React from 'react'
import Navbar from '../components/common/Navbar'
import CarouselHome from '../components/core/CarouselHome'
import About from '../components/core/About'
import HomeCTA from '../components/core/HomeCTA'
import TrendingHouse from '../components/core/TrendingHouse'
import HouseElevation from '../components/core/HouseElevation'
import HousePlan from '../components/core/HousePlan'
import HousePlansVastu from '../components/core/HousePlansVastu'
import Commercial from '../components/core/Commercial'
import HouseDesign from '../components/core/HouseDesign'
import { Services } from '../components/core/Services'
import Features from '../components/core/Features'

const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='carousel'>
                <CarouselHome />
            </div>

            <div className='carousel'>
                <About />
            </div>

            <HomeCTA />

            <TrendingHouse />

            <HouseElevation />

            <HousePlan />

            <HousePlansVastu />

            <Commercial />

            <HouseDesign />

            <Services/>

            <Features />

            <section className='counter-sec'>
                <div className='container'>
                    <div>
                        The Numbers Speaks for  themselves
                    </div>

                    <div>
                        <ul>
                            <li>
                                <h5>5000+</h5>
                                <p>Completed</p>
                            </li>

                            <li>
                                <h5>5000+</h5>
                                <p>Happy Clients</p>
                            </li>

                            <li>
                                <h5>1000+</h5>
                                <p>Commercial Projects</p>
                            </li>

                            <li>
                                <h5>12K+</h5>
                                <p>Followers</p>
                            </li>


                        </ul>
                    </div>

                  
                    

                </div>
            </section>
        </React.Fragment>
    )
}

export default Home