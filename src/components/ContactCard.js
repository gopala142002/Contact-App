import React from "react";
import user from "../images/OIP.jpeg";
import { Link } from "react-router-dom";
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return ( 
    <div
      className="item"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div style={{ display: "flex" }}>
        <img
          className="ui avatar image"
          src={user}
          alt="user"
          style={{ marginRight: "10px" }}
        />
        <div className="content">
          <Link to={`/contact/${id}/${name}/${email}`}>
            <div className="header">{name}</div>
            <div>{email}</div>
          </Link>
        </div>
      </div>
      <div
        data-tooltip="Delete Contact"
        data-position="top right"
        style={{marginLeft:"auto",marginTop:"7px"}}
      >
        <i
          className="trash alternate outline icon"
          style={{
            color: "red",
            cursor: "pointer",
          }}
          onClick={() => props.clickHandler(id)}
        />
      </div>
    </div>
  );
};
export default ContactCard;
