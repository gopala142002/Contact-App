import React from "react";
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { useState,useEffect} from "react";
const App=()=>{
    const [contacts,setContacts]=useState([]);
    const addContactHandler=(contact)=>{
        setContacts([...contacts,contact]);
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
            <ContactList contacts={contacts}/>
        </div>
    )
};
export default App;