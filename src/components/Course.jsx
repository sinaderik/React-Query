import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Link } from 'react-router-dom'



const Course = ({ id, title, price }) => {
    const queryClient = useQueryClient();

    const { mutate: removeCourse } = useMutation((id) => (
        fetch(`http://localhost:4000/courses/${id}`, {
            method: "DELETE",
        })
    ), {
        onSuccess: (response, id) => {
            const courses = queryClient.getQueryData(['AllCourses'])
            const newCourses = courses.filter((course) => course.id !== id)
            queryClient.setQueryData(['AllCourses'], newCourses)
        }
    })

    function removeCourseHandler(event) {
        event.preventDefault()
        removeCourse(id);
    }
    return (
        <div className='col'>
            <div className="card mb-4" style={{ width: "18rem" }}>
                <div className="card-body">
                    <Link to={`/courses/${id}`} className="card-title mb-3">{title}</Link>

                    <p className="card-text" style={{ marginTop: '0.5rem' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h5 className="card-subtitle mb-2 text-body-secondary">Price:{price}</h5>
                    <a onClick={(event) => removeCourseHandler(event)} className="btn btn-danger">Remove</a>
                </div>
            </div>
        </div>
    )
}

export default Course