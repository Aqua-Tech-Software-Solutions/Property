import React, {useState} from "react";
// import { a } from "react-router-dom";


// import { Dashboard } from "../Pages/Dashboard";
// import { Hotel } from "../Pages/Hotel";
import './Sidebar.css'

const Sidebar = (props) => {
    const [show, setShow] = useState (false)
  return (
    <main className={show ? 'space-toggle' : null}>
      <header className="header" style={props.mode}>
        <div className="header-left">
          <div style={props.mode} className="header-toggle" onClick={() => setShow(!show)}>
            <i className="fas fa-bars"></i>
          </div>

        <h1 >CASA<span>ONE</span></h1>
        </div>
        <div className="side" >
        <div className="form-check form-switch">
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          {/* <label className="form-check-label text-light" style={props.mode}  for="flexSwitchCheckDefault">Enable DarkMode</label> */}
        </div>
          <i className="fa fa-question-circle header-icons" style={props.mode} aria-hidden="true"></i>
          <i className="fa fa-briefcase header-icons" style={props.mode} aria-hidden="true"></i>
          <i className="fa fa-bell header-icons" style={props.mode}/>
          <i className="fa fa-user header-icons" style={props.mode} aria-hidden="true"></i>
        </div>
      </header>

      <aside style={props.mode}  className={`sidebar ${show ? 'show' : null} `}>
        <nav style={props.mode}  className="nav">
          <div>
            <a href="#" className="nav-a">
              <i style={props.mode}  className="fas fa-home-alt nav-logo-icon"></i>
              <span style={props.mode}  className="nav-logo-name">Homepage</span>
            </a>

            <div className="nav-list">
            <a href="/dashboard" className="nav-a active">
              <i style={props.mode}  className="fa-solid fa-gauge nav-logo-icon"></i>
              <span style={props.mode}  className="nav-logo-name">Dashboard</span>
            </a>
            <a href="/hotel" className="nav-a">
              <i style={props.mode}  className="fa-solid fa-hotel nav-logo-icon"></i>
              <span style={props.mode}  className="nav-logo-name">Hotel</span>
            </a>
            <a href="#" className="nav-a">
              <i style={props.mode}  className="fa-solid fa-image nav-logo-icon"></i>
              <span style={props.mode}  className="nav-logo-name">Gallery</span>
            </a>
            <a href="#" className="nav-a">
              <i style={props.mode}  className="fa-solid fa-dollar-sign nav-logo-icon"></i>
              <span style={props.mode}  className="nav-logo-name">Transaction</span>
            </a>

            </div>
          </div>

          <a href="/login" className="nav-a">
              <i style={props.mode}  className="fas fa-sign-out nav-logo-icon"></i>
              <span style={props.mode}  className="nav-logo-name">Logout</span>
            </a>

        </nav>
      </aside> 
    
    </main> 
  );
};

export default Sidebar;
