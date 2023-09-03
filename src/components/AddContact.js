import toast from 'react-hot-toast';
import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
function AddContact({ contacts, setContacts }) {
  const [state ,setState] = useState({
    email:'', 
    name :''
  })
  const handleChange = (e) =>{
    setState({...state, [e.target.name]:e.target.value})
  } 
  const navigate = useNavigate();
  const addContactHandler = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    setContacts([...contacts, { id: uuid(), ...state }]);
    toast.success("Contact Added Successfully")
    navigate("/");
  };
  return (
    <div>
      <div className="ui main">
        <div style={{ display: "flex" }}>
          <h2>Add Contact</h2>
          <div style={{ marginLeft: "auto" }}>
            <Link to="/">
              <button className="tiny ui button teal">Contact List</button>
            </Link>
          </div>
        </div>
        <form action="" className="ui form">
          <div className="field" placeholder="Name">
            <div className="ui pointing below red basic label">Enter Name</div>
            <input
              type="text"
              name="name"
              placeholder="MS Dhoni"
              value={state.name}
              onChange={handleChange}
            />
          </div>

          <div className="field" placeholder="Email">
            <div className="ui pointing below red basic label">Enter Email</div>
            <input
              type="text"
              name="email"
              placeholder="xyz@gmail.com"
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <button className="teal ui button" onClick={addContactHandler}>Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddContact;
