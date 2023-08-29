import React from "react";
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
const App=()=>{
    const contacts=[
        {
            id:"1",
            name:"Gopala",
            email:"gopalapatel1234@gmail.com",
        },
        {
            id:"2",
            name:"Ganesh",
            email:"gbirla012@gmail.com",
        }
    ];
    return(
        <div className="ui container">
            <Header/>
            <AddContact/>
            <ContactList contacts={contacts}/>
        </div>
    )
};
export default App;