import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
const ContactList=(props)=>{
    const renderContactList=props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} key={contact.id} contacts={props.contacts} setContacts={props.setContacts}/>
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