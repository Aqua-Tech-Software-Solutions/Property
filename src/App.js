// import  Login  from "./cmp/images/Login";
import Sidebar from "./cmp/Sidebar/Sidebar";
import {BrowserRouter, Routes,Route, } from 'react-router-dom'
import React, {useState} from 'react'

function App(){

    const [mode, setMode] = useState({
        color:"black",
        backgroundColor:"white"
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

{/* <Sidebar/> */}
{/* <Login/> */}

<BrowserRouter>
<Routes>
    <Route path="/" element={<Sidebar mode={mode} toggleMode={toggleMode}/>}/>
</Routes>
</BrowserRouter>
</>


)

}
export default App;