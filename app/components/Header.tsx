import React from 'react'

function Header() {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/5 backdrop-blur">
        <a href="" className="nav-item">Home</a>
        <a href="" className="nav-item">Project</a>
        <a href="" className="nav-item">About</a>
        <a href="" className="nav-item bg-white/5 ">Contact</a>
      </nav>
    </div>
  )
}

export default Header