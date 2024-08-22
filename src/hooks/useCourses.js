import { useQuery } from 'react-query'

function useCourses() {
    return useQuery('AllCourses', () => (
        // throw new Error('Server Error 500')
        fetch(`http://localhost:4000/courses`).then(res => res.json())
    ),{
        select: (data) => {
            return data.map((course) => (
                {
                    ...course,
                    title: course.title.toUpperCase(),
                    price: course.price.toLocaleString(),
                }
            ))
        }
    })
}

export default useCourses