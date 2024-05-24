import React, { useEffect,useState } from 'react'


const Count = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        callApi()
    }, [])

    const callApi = async () => {
        const response = await fetch('http://localhost:4000/courses')
        const allCourses = await response.json()
        setData(allCourses)
    }
    return data.length
}

export default Count