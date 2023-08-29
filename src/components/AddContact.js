import React, { Component } from "react";
class AddContact extends Component {
    render(){
    return(
        <div>
            <div className="ui main">
                <h2>Add Contact</h2>
                <form action="" className="ui form">
                    <div className="field">
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div className="field">
                        <label htmlFor="">Email</label>
                        <input type="text" name="email" placeholder="Email"/>
                    </div>
                    <button className="teal ui button">Add</button>
                </form>
            </div>
        </div>
    )}
};
export default AddContact;  