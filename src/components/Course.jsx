import React from 'react'

const Course = ({ title, price }) => {
    return (
        <div className='col'>
            <div className="card mb-4" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h4 className="card-title mb-3">{title}</h4>
                    <h5 className="card-subtitle mb-2 text-body-secondary">Price:{price}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">More Info</a>
                </div>
            </div>
        </div>
    )
}

export default Course