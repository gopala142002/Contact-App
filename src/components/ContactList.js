import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList=(props)=>{
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    }
    const renderContactList=props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
        );
    });
    return(
        <div className="ui celled list">
            <div style={{display:"flex"}}>
                <h2>Contact List</h2>
                <div style={{marginLeft:"auto"}}>
                    <Link to="/add"><button className="tiny ui button teal">Add Contact</button></Link>
                </div>
            </div>
            {renderContactList}
        </div>
    )
};
export default ContactList;