import { useQuery, useQueryClient } from 'react-query'

function useCourse(id) {
    const queryClient = useQueryClient()

    return useQuery(['single course', id], () => (
        fetch(`http://localhost:4000/courses/${id}`).then(res => res.json())
    ), {
        initialData: () => {
            const courses = queryClient.getQueryData(['Courses'])
            const course = courses?.find(course => Number(course.id) === Number(id))

            return course
        }
    })
}

export default useCourse