import React from 'react'
import { useParams } from 'react-router-dom'
import useCourse from '../hooks/useCourse'

function SingleCourse() {
    const { id } = useParams()
    const {data,isLoading,isFetching}=useCourse(id)
    console.log(' SingleCourse is fetching=>', isFetching)


    if(isLoading){
        return(
            <h2>Loading...</h2>
        )
    }
    return (
        <>
        <h2>Course - {id}</h2>
        <h4>{data.title}</h4>
        <p>{data.price}</p>
        </>
    )
}

export default SingleCourse