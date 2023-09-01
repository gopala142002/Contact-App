// Using class based component

import React, { Component } from "react";
import { Link } from "react-router-dom";
class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    // this.props.history.push("/");
  };
  render() {
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
          <form action="" className="ui form" onSubmit={this.add}>
            <div className="field" placeholder="Name">
              <div className="ui pointing below red basic label">
                Enter Name
              </div>
              <input
                type="text"
                name="name"
                placeholder="MS Dhoni"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>

            <div className="field" placeholder="Email">
              <div className="ui pointing below red basic label">
                Enter Email
              </div>
              <input
                type="text"
                name="email"
                placeholder="xyz@gmail.com"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <button className="teal ui button">Add</button>
          </form>
        </div>
      </div>
    );
  }
}
export default AddContact;

//using functional based component

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// const AddContact = (props) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const add = (e) => {
//     e.preventDefault();
//     if (name === "" || email === "") alert("All the fields are mandatory!");
//     props.addContactHandler({ name, email });
//     setName("");
//     setEmail("");
//     props.history.push("/");
//   };
//   return (
// <div>
//   <div className="ui main">
//     <div style={{display:"flex"}}>
//       <h2>Add contact</h2>
//       <div style={{marginLeft:"auto"}}>
//         <Link to="/"><button className="tiny ui button teal">Contact List</button></Link>
//       </div>
//     </div>
//     <form action="" className="ui form" onSubmit={add}>
// <div className="field" placeholder="Name">
//   <div className="ui pointing below red basic label">Enter Name</div>
//   <input
//     type="text"
//     name="name"
//     placeholder="MS Dhoni"
//     value={name}
//     onChange={(e) => setName(e.target.value)}
//   />
// </div>
// <div className="field" placeholder="Email">
//   <div className="ui pointing below red basic label">Enter Email</div>
//   <input
//     type="text"
//     name="email"
//     placeholder="xyz@gmail.com"
//     value={email}
//     onChange={(e) => setEmail(e.target.value)}
//   />
// </div>
//       <button className="teal ui button">Add</button>
//     </form>
//   </div>
// </div>
//   );
// };
// export default AddContact;
