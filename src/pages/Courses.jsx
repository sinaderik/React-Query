import React, { useEffect, useState } from 'react'
import Course from '../components/Course'
import Count from '../components/Count'
import useCourses from '../hooks/useCourses'
const Courses = () => {

    const { data, isLoading, error, isError, isFetching } = useCourses()
    console.log('Courses is fetching=>', isFetching)

    if (isLoading) {
        return (
            <h3 className='text-center'>Loading...</h3>
        )
    }
    if (isError) {
        return (
            <h3 className='text-center'>{error.message}</h3>
        )
    }
    return (
        <div className='container'>
            <h2 className='mt-4 text-center'>All Courses / <Count /></h2>
            <div className='row mt-3'>
                {
                    data?.map(course => (
                        <Course {...course} key={course.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Courses;