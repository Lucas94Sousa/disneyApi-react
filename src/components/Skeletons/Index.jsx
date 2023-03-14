import { Skeleton } from '@mui/material'
import React from 'react'

export const Skeletons = () => {
    return(
        <>
            <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom: "1em"}} />;
            <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom: "1em"}} />;
            <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom: "1em"}} />;
            <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom: "1em"}} />;
            <Skeleton variant="rounded" width="100%" height={100} sx={{marginBottom: "1em"}} />;
        </>
    )
}
