import { useState } from 'react';
import { IContact } from '../models/Contact';
import ContactsContext, { ContextData } from './ContactsContext';

const ContactsProvider = (props) => {
    const [contextData, setContextData] = useState<ContextData>({
        contacts: [
            {
                id: '1',
                name: 'Timothy Lewis',
                image: '/images/Timothy.png',
                phoneNum: '+36 01 234 5678',
                email: 'timothy@mail.com',
            },
            {
                id: '2',
                name: 'Sarah Wright',
                image: '/images/Sarah.png',
                phoneNum: '+36 01 234 5678',
                email: 'sarah@mail.com',
            },
            {
                id: '3',
                name: 'Lucy Jones',
                image: '/images/Lucy.png',
                phoneNum: '+36 01 234 5678',
                email: 'lucy@mail.com',
            },
        ],
        mode: 'new',
    });

    const addContact = (contact: IContact) => {
        setContextData((prevState) => {
            const newContacts = prevState.contacts;
            newContacts.push({
                ...contact,
                id: (+prevState.contacts[prevState.contacts.length - 1]
                    .id).toString(),
            });
            return {
                mode: prevState.mode,
                contacts: newContacts
            };
        });
        // TODO: backend
    };

    const editContact = (_contact: IContact) => {
        setContextData((prevState) => {
            const contacts = prevState.contacts;
            const contact = contacts.find(contact => contact.id === _contact.id);
            Object.assign(contact, _contact);
            return {
                mode: prevState.mode,
                contacts: contacts
            }
        });
        
        // TODO: backend
    }

    const deleteContact = (id: string) => {
        setContextData((prevState) => {
            return {
                mode: prevState.mode,
                contacts: prevState.contacts.filter(contact => contact.id !== id)
            };
        });
        // TODO: backend
    }

    const contactsContext = {
        contacts: contextData.contacts,
        mode: contextData.mode,
        addNewContact: addContact,
        editContact: editContact,
        deleteContact: deleteContact
    };

    return (
        <ContactsContext.Provider value={contactsContext}>
            {props.children}
        </ContactsContext.Provider>
    );
};

export default ContactsProvider;
