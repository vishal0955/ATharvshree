import React, { useEffect, useState } from 'react'
import { Product } from './Product'
import { getTrendingHouses } from '../../operations/API';

const HousePlansVastu = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const fetchHousesElevations = async () => {
            try {
                const houseData = await getTrendingHouses("HousePlansVastu");
                setHouses(houseData);
            } catch (error) {
                console.log('error: ', error);
            }
        }
        fetchHousesElevations();
    }, [])

    return (
        <React.Fragment>

            <div className='main-title-2'>
                <h2> House Plans as Per
                    <span> Vastu</span>
                </h2>
            </div>

            <div className='trending-house'>
                {
                    houses?.map((h) => (
                        <Product image={h.imageUrl} area={h.label} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}

export default HousePlansVastu