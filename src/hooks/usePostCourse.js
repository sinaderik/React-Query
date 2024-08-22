import { useMutation, useQueryClient } from "react-query"

function usePostCourse() {
    const queryClient=useQueryClient();
    return useMutation((cousre) => (
        fetch('http://localhost:4000/courses', {
            method: "POST",
            headers: {
                "Content-Type": "application/josn"
            },
            body: JSON.stringify({ ...cousre })
        })
    ),{
        onSuccess:()=>{
            queryClient.invalidateQueries(['AllCourses'])
        }
    })
}

export default usePostCourse