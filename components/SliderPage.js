"use client";

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const SliderPage = () => {

    const renderNextButton = ({ isDisabled }) => {
        return <RiArrowRightSLine className="cursor-pointer h-12 w-12 absolute right-0 top-[45%]" />
    };

    const renderPrevButton = ({ isDisabled }) => {
        return <RiArrowLeftSLine className="cursor-pointer h-12 w-12 absolute left-0 top-[45%]" />
    };

    return (
        <div className='max-w-[1300px] w-full mx-auto'>
            <AliceCarousel
                autoPlay={true}
                playButtonEnabled={true}
                infinite={true}
                autoPlayInterval={4000}
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}>
                <img alt="banner1" src="./assets/img1.jpg" className='rounded-xl' loading="lazy" />
                <img alt="banner2" src="./assets/img2.jpg" className='rounded-xl' loading="lazy" />
                <img alt="banner3" src="./assets/img3.jpg" className='rounded-xl' loading="lazy" />
                <img alt="banner4" src="./assets/img4.jpg" className='rounded-xl' loading="lazy" />
            </AliceCarousel>

        </div>
    )
}

export default SliderPage