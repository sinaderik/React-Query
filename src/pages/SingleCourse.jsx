import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

function SingleCourse() {
    const { id } = useParams()
    const {data,isLoading}=useQuery(['single course',id],()=>(
        fetch(`http://localhost:4000/courses/${id}`).then(res=>res.json())
    ))
    console.log(data)
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