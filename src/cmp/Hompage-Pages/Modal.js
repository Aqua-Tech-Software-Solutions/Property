import React from 'react'

export default function Modal({open,children, onClose}) {
  
  
    const overlay = {
        position: "fixed",
        top:'0',
        left:'0',
        right:'0',
        bottom:'0',
        backgroundColor:'rgba(0,0,0,.7)',
        zIndex:1000
    }

    if(!open) return null

    return (
    <>
        <div style={overlay}></div>
    <div className='modal_styles'>
        <div className='title'>
        <h4>Create User</h4>

        <i onClick={onClose} class="fa-solid fa-xmark"></i>
        
        </div>
        {children}
    </div>
    </>
  )
}
