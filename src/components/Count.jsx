import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

const Count = () => {
    const { data } = useQuery('Courses', () =>
        fetch('http://localhost:4000/courses').then(res => res.json()),
        {
            cacheTime: 500000,
            staleTime: 8000,
            refetchOnMount: false,
            refetchOnWindowFocus: true,
            refetchInterval: 3000,
            refetchIntervalInBackground: false,
        }
    )
    // cacheTime changed from 300000 to 500000

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