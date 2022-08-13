import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import "./user.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { CSSTransition } from "react-transition-group";

export default function User() {
  const {
    register,
    handleSubmit,

    // formState: { errors },
  } = useForm();

  const [show, setShow] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  let [data, setData] = useState([]);

  useEffect(() => {
    getIt();
  }, []);

  async function getIt(newUrl) {
    const response = await axios.get(newUrl);
    setData(response.data);
  }
  const onSubmit = (data) => {
    console.log("mai data hu", data);
  };

  const renderTable = () => {
    return data.map((user) => {
      return (
        <>
          <tr key={user.id}>
            <td>{user.fullName}</td>
            <td>{user.language}</td>
            <td>{user.lastActivity}</td>

            {/* <td> */}
            {/* <button
                    className="btn btn-sm btn-primary"
                    onClick={() => deleteUser(user.id)}
                  >
                    delete
                  </button> */}
            {/* </td> */}
          </tr>
        </>
      );
    });
  };
  return (
    <>
      {/* <div class="dropdown">
	  <input class="dropdown-toggle" type="search" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"/>
	
	  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
		<li><a class="dropdown-item" href="#">Action</a></li>
		<li><a class="dropdown-item" href="#">Another action</a></li>
		<li><a class="dropdown-item" href="#">Something else here</a></li>
	  </ul>
	</div> */}
      <div className="container-div">
        <div className="mr-1 float-md-left btn-group mb-1 dropdown" style={{width:"30%"}}>
          <button
            type="button"
            aria-haspopup="true"
            className="dropdown-toggle btn btn-outline-dark "
          >
            Order By:
          </button>
          <div
            className="dropdown-menu"
            tabIndex="-1"
            role="menu"
            aria-hidden="true"
          >
            <button
              type="button"
              tabindex="0"
              role="menuitem"
              class="dropdown-item"
            >
              Title
            </button>
            <button
              type="button"
              tabindex="0"
              role="menuitem"
              class="dropdown-item"
            >
              Status
            </button>
            <button
              type="button"
              tabindex="0"
              role="menuitem"
              class="dropdown-item"
            >
              Label
            </button>
            <button
              type="button"
              tabindex="0"
              role="menuitem"
              class="dropdown-item"
            >
              Category
            </button>
          </div>
        </div>
        
        <div className="search-bar ">
          <input type="search" name="search" id="search" />
          <span className="search-icon">
            <i className="fas fa-search " />
          </span>
        </div>
        <div className="modal-container">
          <button
            className="button"
            type="button"
            onClick={() => setIsOpen(true)}
          >
            &#43;Create New User
          </button>
         <div>
          <div className=" check-alt">
            <div >
              <input type="checkbox" id="checkAll" className="custom-control-input" />
              
            </div>
           
          </div>
          <button type="button" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle-split dropdownButn  dropdown-toggle  ">
                <span class="sr-only">Toggle Dropdown</span></button>
              <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Action</button>
                <button type="button" tabindex="0" role="menuitem" class="dropdown-item">Another action</button>
              </div>
              </div>
          </div>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="form-contianer" onSubmit={handleSubmit(onSubmit)}>
              <form action="">
                <div className="row">
                  <input type="text" {...register("fullname")} />
                  <label>Fullname</label>
                </div>
                <div className="row">
                  <input type="emai" {...register("email")} />
                  <label>E-mail</label>
                </div>
                {/* <input type="email" placeholder="E-mail" /> */}
                <div className="row">
                  <select name="Role" id="Role" {...register("roles")}>
                    {" "}
                    Roles
                    <option value="">Roles</option>
                    <option value="User">Admin and Biling </option>
                    <option value="Admin">Admin</option>
                    <option value="SuperAdmin">Employee</option>
                    <option value="SuperAdmin">Photographer</option>
                    <option value="SuperAdmin">Inactive</option>
                  </select>
                </div>
                <div className="row">
                  <select
                    name="Languages"
                    id="Languages"
                    {...register("language")}
                  >
                    <option value="">Language</option>
                    <option value="english">English</option>
                    <option value="english">French</option>
                    <option value="english">Spanish</option>
                  </select>
                </div>
                <div class="form-check form-switch">
                  <input
                    onClick={() => setShow(!show)}
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label class="form-check-label" for="flexSwitchCheckDefault">
                    send invite Email to set password
                  </label>
                </div>

                {show ? (
                  <button className="btn btn-primary btn-sm" type="submit">
                    Save
                  </button>
                ) : null}
              </form>
            </div>
          </Modal>
        
      </div>
      <div>
        <table id="users">
          <thead>
            <tr>
              <th>User</th>
              <th>Language</th>
              <th>Last Activity</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </>
  );
}
