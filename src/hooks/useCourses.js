import { useQuery } from 'react-query'

function useCourses() {
    return useQuery('Courses', () =>{ 
        // throw new Error('Server Error 500')
        return fetch('http://localhost:4000/courses').then(res => res.json())
    },
        {
            refetchInterval:20000,
            select: (data) => {
                return data.map((course) => (
                    {
                        ...course,
                        title: course.title.toUpperCase(),
                        price:course.price.toLocaleString(),
                    }
                ))
            },
            onSuccess:()=>{
                console.log('Success')
            },
            onError:()=>{
                console.log('Error')
            }
        }
    )
}

export default useCourses