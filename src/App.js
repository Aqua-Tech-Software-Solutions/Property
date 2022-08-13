// import  Login  from "./cmp/images/Login";
import Sidebar from "./cmp/Sidebar/Sidebar";
// import {BrowserRouter, Routes,Route, } from 'react-router-dom'
import React, {useState} from 'react'

import Hompage from "./cmp/Pages/Hompage";
// import Dashboard from "./cmp/Pages/Hompage";

function App(){

    const [mode, setMode] = useState({
        color:"black",
        backgroundColor:"whitesmoke"
    })

const toggleMode = ()=> {
    if(mode.color === "black"){
        setMode({
            color:"white",
            backgroundColor:"#333"
        })
    } else {
        setMode({
            color:"black",
            backgroundColor:"whitesmoke"
        })
    }
}
return(
<>
{/* <Hompage/> */}
{/* <Sidebar/> */}
{/* <Login/> */}


<Sidebar mode={mode} toggleMode={toggleMode}/>

</>


)

}
export default App;