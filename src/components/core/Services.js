import React from 'react'
import ServiceCard from './ServiceCard';
import architectureDesign from "../../assets/images/icons/ArchitectureDesgin.png";
import interiorDesign from "../../assets/images/icons/interior-design.png";
import landscapeArchitecture from "../../assets/images/icons/landscapeArchitecture.png";
import porjectManagement from "../../assets/images/icons/project-management.png";
import civilConstruction from "../../assets/images/icons/CivilConstruction.png"

export const Services = () => {
    return (

        <React.Fragment>
            <div className='main-title-2'>
                <h2> we
                    <span> offer </span>
                    a full range of
                    <span> services </span>
                    under one roof
                </h2>
            </div>

            <div className='services'>


                <ServiceCard icon={architectureDesign} heading={"Architecture Design"} description={"Feasibility Studies, Site Analysis, Space Planning, Massing, Soil Testing, Structural Design, MEP Design, Natural Lighting and Ventilation Design, Solar Passive Design, Engineering, and Working Drawings."} />
                <ServiceCard icon={interiorDesign} heading={"Interior Design"} description={"Site Measurement, Space Planning, Furniture Layout, Mood board Presentation, Conceptual Sketches, 3D Visualization, Panoramic Interior Views, Working Drawings, Bill of Quantity, Material Specifications, Services Design, Quality Checks, Snag List, and Shopping Visits."} />
                <ServiceCard icon={landscapeArchitecture} heading={"Landscape Architecture"} description={"Site Analysis, Shadow study, Site Planning, Softscape Design, Hardscape Design, Drainage Design, Material Palette, Play Area Design, Water Body Design, Plant specifications, Irrigation Scheme, Outdoor Lighting Design, Aerial Views."} />
                <ServiceCard icon={porjectManagement} heading={"Project Management"} description={"Master Schedule, Project Budget, Progress Meetings, Site Program Plan, Consultant Management, Contract Administration, Cash Flow Projections, Tender Management, Bid Reviews, Cost Optimization, Time Management, Value Engineering, Progress Reports, Quality Control, Handover Documentation, Vendor Payment Approvals."} />
                <ServiceCard icon={civilConstruction} heading={"Civil Construction"} description={"Site Mobilization, Storage and Utilities Management, Material Procurement, Schedule Optimization, Site Progress Report, Change Request Management, Strength Test Reports, Labor Management, Health and Safety Standards, Quality Assurance and Control, Sub-Contractor Management, and occupancy Support."} />
            </div>
        </React.Fragment>

    )
}
