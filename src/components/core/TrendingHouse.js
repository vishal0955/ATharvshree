import React, { useEffect, useState } from 'react'
import { Product } from './Product'
import { getTrendingHouses } from '../../operations/API'

const TrendingHouse = () => {

    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const fetchHouses = async () => {
            try {
                const houseData = await getTrendingHouses("TrendingHouse");
                console.log('houseData: ', houseData);
                setHouses(houseData);
            } catch (error) {
                console.log('error: ', error);
            }
        }
        fetchHouses();
    }, [])
    return (

        <React.Fragment>

            <div className='main-title-2'>
                <h2>Trending House By
                    <span> Area</span>
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

export default TrendingHouse