import { Skeleton } from '@mui/material'
import React from 'react'

const LoadingCard = () => {
  return (
    <div>
        <Skeleton width={"100%"} height={140} variant='rounded'></Skeleton>
        <Skeleton width={150} height={40}></Skeleton>
        <Skeleton height={80}></Skeleton>
        <Skeleton width={40} height={40} variant='circular'></Skeleton>
    </div>
  )
}

export default LoadingCard