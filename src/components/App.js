import React from "react";
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { useState } from "react";
const App=()=>{
    const [contacts,setContacts]=useState([]);
    const addContactHandler=(contact)=>{
        setContacts([...contacts,contact]);
    }
    return(
        <div className="ui container">
            <Header/>
            <AddContact addContactHandler={addContactHandler}/>
            <ContactList contacts={contacts}/>
        </div>
    )
};
export default App;