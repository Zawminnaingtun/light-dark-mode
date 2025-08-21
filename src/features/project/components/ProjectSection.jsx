import React from 'react'
import { Link } from 'react-router'

const ProjectSection = () => {
  return (
    <div>
        <div className="">
            Are you interested in my project?
        </div>
      <Link to={"/project-detail"}>
      <button className='bg-sky-500 text-white py-2 px-4 rounded-full mt-5'>View Detail</button>
      </Link>
    </div>
  )
}

export default ProjectSection