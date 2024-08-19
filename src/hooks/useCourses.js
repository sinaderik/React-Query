import { useQuery } from 'react-query'

function useCourses() {
    return useQuery('Courses', () => {
        // throw new Error('Server Error 500')
        return fetch('http://localhost:4000/courses').then(res => res.json())
    },
        {
            cacheTime: 500000,
            staleTime: 8000,
            refetchOnMount: false,
            refetchOnWindowFocus: true,
            refetchInterval: 3000,
            refetchIntervalInBackground: false,
        }
    )
}

export default useCourses