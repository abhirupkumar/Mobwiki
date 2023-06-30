// import { useSearchParams } from 'next/navigation';
import React from 'react'
import { AiFillStar, AiOutlineSearch } from 'react-icons/ai';
import { handleData, handleSearch } from '../action';
import dataJson from '../../utils/data.json';
import Table from '@/components/Table';
import PagenationPart from '@/components/PagenationPart';

const Search = async ({ searchParams }) => {
    const { data, page, totalPages } = await handleData(dataJson, searchParams.query ?? "", searchParams.page ?? null, searchParams.order ?? null, searchParams.tag ?? null)

    return (
        <div className='flex flex-col w-full justify-center items-center'>
            <form className="flex mt-10 justify-center items-center lg:mx-10 mx-2" action={handleSearch}>
                <div className="flex justify-end items-center">
                    <input className='border-2 border-gray-300 bg-white h-12 md:w-[30rem] w-[20rem] px-5 flex-1 pr-16 flex rounded-xl text-sm focus:outline-none' type="search" name="search" placeholder="Search for any mobile..." />
                    <button type="submit" className="absolute mx-2 text-xl bg-blue-800 p-2 rounded-xl text-white flex">
                        <AiOutlineSearch />
                    </button>
                </div>
            </form>
            {data.length > 0 && <PagenationPart query={searchParams.query ?? ""} page={page} totalPages={totalPages} />}
            <Table query={searchParams.query ?? ""} page={page} data={data} />
            {data.length > 0 && <PagenationPart page={page} totalPages={totalPages} />}

        </div>
    )
}

export default Search