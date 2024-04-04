import React, { useState, useRef } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { getAllBanner } from '../../operations/API';
import { useEffect } from 'react';



const CarouselHome = () => {

    const [banners, setBanners] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0); 
    const carouselRef = useRef(null);

    const handleVideoEnded = () => {
        // Advance to the next slide only if the current slide is a video and it has ended
        if (banners[currentSlide]?.isImage === false) {
            carouselRef.current.next();
        }
    };

    const handleSelect = (selectedIndex, e) => {
        setCurrentSlide(selectedIndex);
    };

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const bannersData = await getAllBanner();
                console.log('bannersData: ', bannersData);
                setBanners(bannersData);
            } catch (error) {
                console.error('Error fetching banners:', error);
            }
        };

        fetchBanners();
    }, []);

    return (
        <React.Fragment>
            <Carousel
                indicators={false}
                pause={"hover"}
                wrap={true}
                touch={true}
                interval={2000}
                keyboard={true}
                slide={true}
            >

                {banners.map((item, index) => (

                    <Carousel.Item >
                        <div className="d-block w-100">

                        {
                            item.isImage ? (
                                <img
                                src={item.imageUrl}
                                alt=""
                                //className="d-block w-100"
                                style={{ maxHeight: "700px", maxWidth: "100vw", width: "100%", height: "auto" }}
                            />
                            ) : (
                                <video
                                controls
                                autoPlay
                                muted
                                onEnded={handleVideoEnded}
                                style={{ maxHeight: "700px", maxWidth: "100vw", width: "100%", height: "auto" }}
                            >
                                <source src={item.imageUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            )
                        }
                        </div>

                    </Carousel.Item>
                ))}
            </Carousel>

        </React.Fragment>
    )
}

export default CarouselHome