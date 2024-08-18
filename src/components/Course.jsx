import React from 'react'
import { Link } from 'react-router-dom'

const Course = ({ id,title, price }) => {
    return (
        <div className='col'>
            <div className="card mb-4" style={{ width: "18rem" }}>
                <div className="card-body">
                    <Link to={`/courses/${id}`} className="card-title mb-3">{title}</Link>
                    <h5 className="card-subtitle mb-2 text-body-secondary">Price:{price}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={`/courses/${id}`} className="card-link">More Info</Link>
                </div>
            </div>
        </div>
    )
}

export default Course