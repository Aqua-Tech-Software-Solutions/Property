import React from 'react'
import Myprofile from '../Hompage-Pages/Myprofile'
// import User from '../Hompage-Pages/User'

export default function Hompage() {
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-light" style={{zIndex:"-1", top:"70px"}} >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">My Profile</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Company Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">User</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Interfaces</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Templates</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Tags</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Services</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/* <User/> */}
<Myprofile/>
   </>
  )
}
