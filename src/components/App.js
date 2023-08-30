import React from "react";
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import {v4 as uuid} from 'uuid';
import { useState,useEffect} from "react";
const App=()=>{
    const [contacts,setContacts]=useState([]);
    const addContactHandler=(contact)=>{
        setContacts([...contacts,{id:uuid(),...contact}]);
    }
    const removeContactHandler=(id)=>{
        const newContacts=contacts.filter((contact)=>{
            return contact.id!==id;
        });
        setContacts(newContacts);
    }
    useEffect(()=>{
        const retriveContacts=JSON.parse(localStorage.getItem("contacts"));
        if(retriveContacts)
            setContacts(retriveContacts);
    },[]);
    useEffect(()=>{
        localStorage.setItem("contacts",JSON.stringify(contacts));
    },[contacts]);
    return(
        <div className="ui container">
            <Header/>
            <AddContact addContactHandler={addContactHandler}/>
            <ContactList contacts={contacts} getContactId={removeContactHandler}/>
        </div>
    )
};
export default App;