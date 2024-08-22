import React from 'react'
import useData from '../hooks/useData'

const Home = () => {
  const [allCourses,articles]=useData();
  const {data,isError,isLoading,isFetching}=allCourses

  console.log(allCourses)
  console.log(articles)

  return (
    <div>Home</div>
  )
}

export default Home