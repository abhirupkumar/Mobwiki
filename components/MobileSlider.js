"use client";

import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import dataJson from '../utils/data.json';
import Link from 'next/link';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { AiFillStar } from 'react-icons/ai'

const responsive = {
    2000: {
        items: 5,
    },
    1316: {
        items: 4,
    },
    880: {
        items: 3,
    },
    300: {
        items: 2,
    },
    0: {
        items: 1,
    }
};

const MobileSlider = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        setData(dataJson)
    }, [])

    const renderNextButton = ({ isDisabled }) => {
        return <RiArrowRightSLine className="cursor-pointer h-10 w-10 absolute right-0 top-[45%]" />
    };

    const renderPrevButton = ({ isDisabled }) => {
        return <RiArrowLeftSLine className="cursor-pointer h-10 w-10 absolute left-0 top-[45%]" />
    };

    return (
        <div className="flex flex-wrap w-full my-20 flex-col items-center text-center">
            {data.length > 0 ? <AliceCarousel
                responsive={responsive}
                mouseTracking
                infinite
                controlsStrategy={"default"}
                autoPlayStrategy='all'
                autoPlayInterval={1000}
                disableDotsControls
                keyboardNavigation
                style={{
                    width: "100%",
                    justifyContent: "center",
                }}
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}>
                {data.length > 0 && data.map((index, item) => {
                    const rawstars = data[item]?.stars
                    const stars = rawstars.substring(0, rawstars.indexOf(" "));
                    return <div key={index} className="lg:w-[310px] md:w[250px] prod-shadow  lg:h-auto cursor-pointer m-2">
                        <Link href={data[item]?.url} rel="noopener noreferrer" target="_blank">
                            <div className="flex justify-center md:h-[380px] h-[200px] relative overflow-hidden">
                                <img alt="ecommerce" className="m-auto md:m-0 md:h-[380px] h-[200px] prodimg-border block" src={data[item]?.image_src} loading='lazy' />
                            </div>
                            <div className="text-center mx-[10px] md:text-justify flex flex-col lg:h-[195px] h-[162px] justify-evenly">
                                <h3 className="text-gray-500 mx-auto text-xs tracking-widest title-font">AMAZON</h3>
                                <h2 className="text-gray-900 mx-auto text-left title-font lg:text-[15px] text-[0.63rem] font-medium">{data[item]?.name}</h2>
                                <div className="mt-1 flex space-x-8">
                                    <p className="text-left text-black font-semibold md:text-base text-xs">₹ {data[item]?.price}</p>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-black items-center flex font-semibold md:text-base text-xs">{stars} <AiFillStar className="text-yellow-400" /></p>
                                        <div className="text-sm font-medium text-gray-900 md:block hidden underline hover:no-underline dark:text-white">{data[item]?.rating}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                })}
            </AliceCarousel>
                :
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>}
        </div>
    )
}

export default MobileSlider