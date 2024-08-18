import React, { useEffect,useState } from 'react'
import { useQuery } from 'react-query'

const Count = () => {
    const { data } = useQuery('Courses', () =>
        fetch('http://localhost:4000/courses').then(res => res.json()))
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     callApi()
    // }, [])

    // const callApi = async () => {
    //     const response = await fetch('http://localhost:4000/courses')
    //     const allCourses = await response.json()
    //     setData(allCourses)
    // }
    return data?.length
}

export default Count