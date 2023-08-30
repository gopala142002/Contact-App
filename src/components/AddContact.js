// import React, { Component } from "react";
// class AddContact extends Component {
//     state={
//         name:"",
//         email:"",
//     };
//     add=(e)=>{
//         e.preventDefault();
//         if(this.state.name==="" || this.state.email==="")
//         {
//             alert("All the fields are mandatory!");
//             return;
//         }
//         this.props.addContactHandler(this.state);
//         this.setState({name:"",email:""});
//     }
//     render(){
//     return(
//         <div>
//             <div className="ui main">
//                 <h2>Add Contact</h2>
//                 <form action="" className="ui form" onSubmit={this.add}>
//                     <div className="field">
//                         <label htmlFor="">Name</label>
//                         <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
//                     </div>
//                     <div className="field">
//                         <label htmlFor="">Email</label>
//                         <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
//                     </div>
//                     <button className="teal ui button">Add</button>
//                 </form>
//             </div>
//         </div>
//     )}
// };
// export default AddContact;
import React, { useState } from "react";
const AddContact = (props) => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
  const add = (e) => {
    e.preventDefault();
    if(name==="" || email==="")
        alert("All the fields are mandatory!");
    props.addContactHandler({name,email});
    setName("");
    setEmail("");
  };
  return (
    <div>
      <div className="ui main">
        <h2>Add contact</h2>
        <form action="" className="ui form" onSubmit={add}>
          <div className="field">
            <label name="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label name="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="teal ui button">Add</button>
        </form>
      </div>
    </div>
  );
};
export default AddContact;
