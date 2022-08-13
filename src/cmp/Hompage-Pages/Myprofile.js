import React from 'react'
import {FaEdit} from 'react-icons/fa';
import './myprofile.css'
export default function Myprofile() {
  return (
    <>
    
    <div className="contianer d-flex " style={{flexWrap:"wrap",justifyContent:"space-around", marginTop:"20px", zIndex:-2, top:"100px"}}>
        <div className="card" style={{width:"400px"}} >
            <header className='upper-part' style={{display:"flex",marginTop:"5px", justifyContent:"space-between", alignItems:"center"}}>
                <div className="name"><h5>User Data</h5></div>
                <button className='edit-icon'><FaEdit/></button> 
            </header>
            <hr />
            <div className="card-body" style={{display:"flex", flexWrap:"wrap"}}>
                <div className='card_details'>
            <label htmlFor="#" style={{transform:"translateY(-28px)"}}>User Roll</label>
            <h5><b>Administrator</b></h5>
                </div>
                <div className='card_details'>
            <label htmlFor="#" style={{transform:"translateY(-28px)"}}>User Name</label>
            <h5><b>Muneeb Islam</b></h5>
                </div>
                <div className='card_details'>
            <label htmlFor="#">Last Activity</label>
            <p><b>11:30Am</b></p>
                </div>
                <div className='card_details'>
            <label htmlFor="#">Inform User about received requests</label>
            <p><b>No</b></p>
                </div>
            </div>
        </div>
        <div className="card" style={{width:"600px"}}>
            <header className='upper-part' style={{display:"flex",marginTop:"5px", justifyContent:"space-between", alignItems:"center"}}>
                <div className="name"><h5>Contact Details</h5></div>
                <button className='edit-icon'><FaEdit/></button> 
            </header>
            <hr />
            <div className="card-body" style={{display:"flex", flexWrap:"wrap", }}>
                <div className='card_details'>
            <label htmlFor="#" style={{transform:"translateY(-28px)"}}>Status</label>
            <h5><b>Active</b></h5>
                </div>
                <div className='card_details'>
            <label htmlFor="#" style={{transform:"translateY(-28px)"}}>Display Name</label>
            <h5><b>Muneeb </b></h5>
                </div>
                <div className='card_details' >
            <label htmlFor="#" style={{transform:"translateY(-28px)"}}>Last Name</label>
            <p><b>Islam</b></p>
                </div>
                <div className='card_details'>
            <label htmlFor="#" style={{transform:"translateY(-28px)"}}>First Name</label>
            <p><b>Muneeb</b></p>
                </div>
                <div className='card_details'>
            <label htmlFor="#" style={{marginBottom:"8px"}}>Language</label>
            <p><b>German</b></p>
                </div>
                <div className='card_details'>
            <label htmlFor="#" style={{marginBottom:"8px"}} >Letter Saluation</label>
            <p><b>Good Day</b></p>
                </div>
            </div>
        </div>
        <div className="card" style={{width:"400px", height: "140px" , marginTop:"40px"}}>
            <header className='upper-part' style={{display:"flex",marginTop:"5px", justifyContent:"space-between", alignItems:"center"}}>
                <div className="name"><h5>Signature</h5></div>
                <button className='edit-icon'><FaEdit/></button> 
            </header>
            <hr />
            <div className="card-body" style={{textAlign:"center"}}>
            <button
            className="button"
            type="button"
          >
            &#43;Create Signature
          </button>
            </div>
        </div>
        <div className="card" style={{width:"600px"}}>
            <header className='upper-part' style={{display:"flex",marginTop:"5px", justifyContent:"space-between", alignItems:"center"}}>
                <div className="name"><h5>User Picture</h5></div>
                <button className='edit-icon'><FaEdit/></button> 
            </header>
            <hr />
            <div className="card-body" style={{textAlign:"center"}}>
            <button
            className="button"
            type="button"
          >
            &#43;Add
          </button>
            </div>
        </div>
        <div className="card" style={{width:"600px"}}>
            <header className='upper-part' style={{display:"flex",marginTop:"5px", justifyContent:"space-between", alignItems:"center"}}>
                <div className="name"><h5>Adress</h5></div>
                <button className='edit-icon'><FaEdit/></button> 
            </header>
            <hr />
            <div className="card-body" style={{textAlign:"center"}}>
            <button
            className="button"
            type="button"
          >
            &#43;Record the Address
          </button>
            </div>
        </div>
    </div>
    
    </>
  )
}
