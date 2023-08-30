import React from "react";
import user from "../images/photo1.jpg";
const ContactCard = (props) => {
  const {id,name, email } = props.contact;
  return (
    <div className="item" style={{display:"flex",justifyContent:"space-between"}}>
        <div style={{display:"flex"}}>
            <img className="ui avatar image" src={user} alt="user" style={{marginRight:"10px"}}/>
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
        </div>
        <i
            className="trash alternate outline icon"
            style={{ color: "red", marginTop: "7px",marginLeft:"auto",cursor:"pointer"}}
            onClick={()=>props.clickHandler(id)}
            ></i>
    </div>
  );
};
export default ContactCard;
