import { useQueries } from "react-query"

const getCourses = async () => {
    return await fetch(`http://localhost:4000/courses`).then(res => res.json())
}

const getArticles = async () => {
    return await fetch(`http://localhost:4000/articles`).then(res => res.json())
}

function useData() {
    return useQueries([
        { queryKey: 'allCourses', queryFn: getCourses },
        { queryKey: 'articles', queryFn: getArticles }
    ])
}

export default useData