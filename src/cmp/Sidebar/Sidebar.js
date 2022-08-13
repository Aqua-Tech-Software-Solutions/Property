import React, {useState} from "react";
import Hompage from "../Pages/Hompage";
// import { a } from "react-router-dom";


// import { Dashboard } from "../Pages/Dashboard";
// import { Hotel } from "../Pages/Hotel";
import './Sidebar.css'

const Sidebar = (props) => {
    const [show, setShow] = useState (false)
  return (
    <>
    <main style={{position:"fixed"}} className={show ? 'space-toggle' : null}>
      <header className="header" style={props.mode}>
        <div className="header-left">
          <div style={props.mode} className="header-toggle" onClick={() => setShow(!show)}>
            <i className="fas fa-bars"></i>
          </div>
          <div className="search-bar ">
            <input type="search" name="search" id="search" />
            <span className="search-icon">
              <i className="fas fa-search " />
            </span>
          </div>
          <div className="dropdown">
            <button  className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">en
            <span className="caret"></span></button>
            <ul className="dropdown-menu">
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">JavaScript</a></li>
            </ul>
          </div>

        </div>
        <div className="side" >
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            {/* <label className="form-check-label text-light" style={props.mode}  for="flexSwitchCheckDefault">Enable DarkMode</label> */}
          </div>
          {/* <i className="fa fa-briefcase header-icons" style={props.mode} aria-hidden="true"></i> */}
          <i className="fa fa-th-large header-icons" style={props.mode} aria-hidden="true"></i>
          <i className="fa fa-bell header-icons" style={props.mode}/>
          <button className="header-icon btn btn-empty d-none d-sm-inline-block" type="button" id="fullScreenButton"><i style={props.mode} className="fa fa-arrows-alt d-block"></i></button>
          <i className="fa fa-user header-icons" style={props.mode} aria-hidden="true"></i>
        </div>
      </header>

      <aside style={props.mode}  className={`sidebar ${show ? 'show' : null} `}>
        <nav style={props.mode}  className="nav">
          <div>
            <a href="/" className="nav-a">
              <i style={props.mode}  className="fa-solid fa-folder-plus nav-logo-icon"></i>
              <span style={props.mode}  className="nav-logo-name">New</span>
            </a>

            <div className="nav-list">
            <a href="/dashboard" className="nav-a active">
              <i style={props.mode}  className="fa-solid fa-gauge nav-logo-icon"></i>
              <span style={props.mode}  className="nav-logo-name">Dashboard</span>
            </a>
            
            <a href="/gallery" className="nav-a">
              <i style={props.mode}  className="fa-solid fa-earth nav-logo-icon"></i>
              <span style={props.mode}  className="nav-logo-name">Publications</span>
            </a>
            <a href="/transaction" className="nav-a">
              <i style={props.mode}  className="fa-solid fa-address-book nav-logo-icon"></i>
              <span style={props.mode}  className="nav-logo-name">Contact</span>
            </a>
            <a href="/transaction" className="nav-a">
              <i style={props.mode}  className="fa-solid fa-newspaper nav-logo-icon"></i>
              <span style={props.mode}  className="nav-logo-name">News</span>
            </a>
        
            <a href="/transaction" className="nav-a">
              <i style={props.mode}  className="fa-solid fa-file-waveform nav-logo-icon"></i>
              <span style={props.mode}  className="nav-logo-name">Reporting</span>
            </a>
            <a href="/transaction" className="nav-a">
              <i style={props.mode}  className="fa-solid fa-photo-film nav-logo-icon"></i>
              <span style={props.mode}  className="nav-logo-name">Media</span>
            </a>
            <a href="/transaction" className="nav-a">
              <i style={props.mode}  className="fa-solid fa-gear nav-logo-icon"></i>
              <span style={props.mode}  className="nav-logo-name">Settings</span>
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

<Hompage/>
</>
  );
};

export default Sidebar;
