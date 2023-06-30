"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

const Table = ({ query, page, data }) => {

    const router = useRouter();

    const handleSort = (order, tag) => {
        var newlink = `/search?query=${query}`
        if (page != null)
            newlink += `&page=${page}`
        newlink += `&order=${order}&tag=${tag}`
        router.push(newlink);
    }

    return (
        <div className="overflow-x-auto md:px-12 px-2">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 w-[10rem]">
                            Image
                        </th>
                        <th scope="col" className="px-6 py-3 w-[22rem]">
                            Product Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Site
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex justify-center items-center">
                                Star
                                <div className='flex flex-col items-center'>
                                    <button className='text-[16px] -mb-[10px]' onClick={() => handleSort("asc", "star")}>
                                        <RiArrowUpSFill value="asc-price" />
                                    </button>
                                    <button className='text-[16px]' onClick={() => handleSort("desc", "star")} >
                                        <RiArrowDownSFill value="desc-price" />
                                    </button>
                                </div>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex justify-center items-center">
                                Price
                                <div className='flex flex-col items-center'>
                                    <button className='text-[16px] -mb-[10px]' onClick={() => handleSort("asc", "price")}>
                                        <RiArrowUpSFill value="asc-price" />
                                    </button>
                                    <button className='text-[16px]' onClick={() => handleSort("desc", "price")} >
                                        <RiArrowDownSFill value="desc-price" />
                                    </button>
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 && data.map((index, item) => {
                        const rawstars = data[item]?.stars
                        const stars = rawstars.substring(0, rawstars.indexOf(" "));
                        return <tr key={data[item]?.url} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="pr-6 py-2">
                                <a href={data[item]?.url} rel="noopener noreferrer" target="_blank">
                                    <img alt={`image-${index + 1}`} className="" src={data[item]?.image_src} loading='lazy' />
                                </a>
                            </td>
                            <td className="px-6 py-2 text-black font-semibold">
                                <a href={data[item]?.url} rel="noopener noreferrer" target="_blank">
                                    {data[item]?.name}
                                </a>
                            </td>
                            <td className="px-6 py-2 text-black font-semibold">
                                AMAZON
                            </td>
                            <td className="px-6 py-2">
                                <div className='flex items-center space-x-1 text-black font-semibold'>
                                    <p className='font-medium'>{stars}</p>
                                    <AiFillStar className="text-yellow-400" />
                                </div>
                            </td>
                            <td className="px-6 py-2 text-black font-semibold">
                                ₹ {data[item].price}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table