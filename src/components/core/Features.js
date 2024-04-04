import React from 'react'
import ServiceCard from './ServiceCard';
import customisedDesign from "../../assets/images/icons/CustomisedDesign.png";
import timeSaving from "../../assets/images/icons/TimeSaving.png";
import highQCDrawing from "../../assets/images/icons/highQualtyDesign.png";
import AffordablePrice from "../../assets/images/icons/affordablePrice.png";
import AffordableDrawing from "../../assets/images/icons/BudgetFriendlyDrawing.png";
import engineer from "../../assets/images/icons/Civil Engineer.png";


const Features = () => {
    return (

        <React.Fragment>
            <div className='main-title-2'>
                <h2> Why
                    <span> Choose Atharva Shree Infra </span>
                </h2>
            </div>

            <div className='services'>


                <ServiceCard icon={customisedDesign} heading={"Customised Design"} description={"Additionally, we create outstanding bespoke house plans. With more than 8+ years of experience, the Architect's Team has created homes for clients all around the world."} />
                <ServiceCard icon={timeSaving} heading={"Saving Time"} description={"Time-saving house plans are available at www.atharvashreeinfra.com. A proper design that can bring comfort, satisfaction, and a high level of life can be found with less time spent planning and designing it."} />
                <ServiceCard icon={highQCDrawing} heading={"High Quality Drawings"} description={"High aesthetic quality in a piece of art, team review of all drawings, yet it is still significant."} />
                <ServiceCard icon={AffordablePrice} heading={"Affordable Price"} description={"Building can be done for a reasonable price using tested, high-quality, value-engineered house plans with a grid system layout. These plans also use building materials that are graded properly."} />
                <ServiceCard icon={AffordableDrawing} heading={"Budget Friendly Drawing"} description={"It would be less expensive with quality when we compare it using Special Architect, you discovered."} />
                <ServiceCard icon={engineer} heading={"No Need For an Engineer Visit"} description={"Online connectivity up until construction, accurate drawings that have been verified three times and are detailed with all relevant measurements are required. However, our Engineer will be sent in case of emergency."} />

            </div>
        </React.Fragment>

    )
}

export default Features