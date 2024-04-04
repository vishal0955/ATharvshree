import React from 'react';
import icon from "../../assets/images/icons/civil-engineering.png"

const ServiceCard = ({icon, heading, description}) => {
  return (
    <React.Fragment>
        <div className='services-card'>
            <img src={icon} alt="" />
            <h3>{heading}</h3>
            <p>{description}</p>
        </div>
    </React.Fragment>
  )
}

export default ServiceCard;