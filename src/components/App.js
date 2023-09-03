import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import { Toaster } from 'react-hot-toast';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useState, useEffect } from "react";
const App = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem("contacts"));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactList
                contacts={contacts}
                setContacts={setContacts}
              />
            }
          />
          <Route
            path="/add"
            exact
            element={<AddContact contacts={contacts} setContacts={setContacts} />}
          />
          <Route path="/contact/:id/:name/:email" exact element={<ContactDetail/>}/>
        </Routes>
      </Router>
      <Toaster />
    </div>
  );
};
export default App;
