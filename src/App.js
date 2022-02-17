import React, { useState, useEffect, Component } from 'react';
import ContactCard from './ContactCard.js';
import './styles.css'

const App = () => {
    const [contacts, setContacts] = useState([]);

    useEffect( () => {
        fetch('https://randomuser.me/api/?results=10')
            .then((response) => response.json())
            .then((data) => {
                setContacts(data.results);
            });
    }, []); // Include empty list to have this run only once

    return (
        <>
            { contacts.map((contact) => (
                <ContactCard
                    avatar = {contact.picture.large}
                    name = {contact.name.first + ' ' + contact.name.last}
                    email = {contact.email}
                    age = {contact.dob.age}
                />
            ))}
        </>
    );
};

export default App;