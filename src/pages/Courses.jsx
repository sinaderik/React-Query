import React, { useEffect, useState } from 'react'
import Course from '../components/Course'
import Count from '../components/Count'
import useCourses from '../hooks/useCourses'
import { useMutation } from 'react-query'
import { Navigate, json, useNavigate } from 'react-router-dom'
const Courses = () => {

    const { data, isLoading, error, isError, isFetching } = useCourses();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');


    const { mutate: addCourse } = useMutation((cousre) => (
        fetch('http://localhost:4000/courses', {
            method: "POST",
            headers: {
                "Content-Type": "application/josn"
            },
            body: JSON.stringify({ ...cousre })
        })
    ))

    function addCourseHandler(event) {
        event.preventDefault();
        addCourse({ title, price })
    }

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
            <hr />
            <form className='d-flex justify-content-center gap-3'>
                <span>Title:</span><input className='' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <span>Price:</span><input className='' type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                <button onClick={(event) => addCourseHandler(event)}>Add Course</button>
            </form>
            <hr />
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