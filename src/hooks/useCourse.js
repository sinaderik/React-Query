import { useQuery } from 'react-query'

function useCourse(id) {
    return useQuery(['single course', id], () => (
        fetch(`http://localhost:4000/courses/${id}`).then(res => res.json())
    ))
}

export default useCourse