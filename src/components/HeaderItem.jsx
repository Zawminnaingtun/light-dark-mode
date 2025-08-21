import React from 'react'
import { Link } from 'react-router'

const HeaderItem = () => {
  return (
    <div className='flex gap-4'>
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            <Link to="/about">About</Link>
        </div>
        <div>
            <Link to="/experience">Experience</Link>
        </div>
        <div>
            <Link to="/education">Education</Link>
        </div>
        <div>
            <Link to="/skill">Skills</Link>
        </div>
        <div>
            <Link to="/project">Projects</Link>
        </div>
        <div>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default HeaderItem