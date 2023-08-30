import React from "react";
import user from '../images/photo1.jpg';
const ContactCard=(props)=>{
    const {name,email}=props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
                <i className="trash alternate outline icon" style={{color:"red",marginTop:"7px"}}></i>
            </div>
        </div>
    )
};
export default ContactCard;