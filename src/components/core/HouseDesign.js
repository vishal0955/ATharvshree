import React, { useEffect, useState } from 'react'
import { Product } from './Product'
import { getTrendingHouses } from '../../operations/API'

const HouseDesign = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const fetchHouses = async () => {
            try {
                const houseData = await getTrendingHouses("HouseDesign");
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
                <h2> Magnificient House
                    <span> Design</span>
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

export default HouseDesign