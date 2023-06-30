"use client";

import { Pagination } from '@mui/material'
import { useRouter } from 'next/navigation';
import React from 'react'

const PagenationPart = ({ query, page, totalPages }) => {

    const router = useRouter()

    const handlePageChange = (event, value) => {
        router.push(`/search?query=${query}&page=${value}`)
    }

    return (
        <div className='my-10'>
            <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                variant="outlined" color="primary"
            />
        </div>
    )
}

export default PagenationPart