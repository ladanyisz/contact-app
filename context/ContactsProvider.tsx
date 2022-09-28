import { useState } from 'react';
import { IContact } from '../models/Contact';
import { ContactChangeMode } from '../models/ContactChangeMode';
import ContactsContext, { ContextData } from './ContactsContext';

const ContactsProvider = (props) => {
    const [contacts, setContacts] = useState<IContact[]>([]);

    const trimContactData = (contact: IContact) => {
        contact.name = contact.name.trim();
        contact.phoneNum = contact.phoneNum.trim();
        contact.email = contact.email.trim();
    };

    const _addContact = async (contact: IContact) => {
        const response = await fetch('/api/addContact', {
            method: 'POST',
            body: JSON.stringify(contact),
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    };

    const addContact = async (contact: IContact) => {
        try {
            trimContactData(contact);
            const newContact = await _addContact(contact);
            setContacts((prevState) => [...prevState, newContact]);
        } catch (error) {
            console.log(error);
        }
    };

    const _editContact = async (contact: IContact) => {
        const response = await fetch('/api/editContact', {
            method: 'POST',
            body: JSON.stringify(contact),
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    };

    const editContact = async (contact: IContact) => {
        trimContactData(contact);
        try {
            await _editContact(contact);
            setContacts((prevState) => {
                const allContacts = prevState;
                const cont = allContacts.find((c) => c.id === contact.id);
                Object.assign(cont, contact);
                return [...allContacts];
            });
        } catch (error) {
            console.log(error);
        }
    };

    const _deleteContact = async (id: string) => {
        const response = await fetch('/api/deleteContact', {
            method: 'POST',
            body: JSON.stringify(id),
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    };

    const deleteContact = async (id: string) => {
        try {
            await _deleteContact(id);
            setContacts((prevState) => {
                return [...prevState.filter((contact) => contact.id !== id)];
            });
        } catch (error) {
            console.log(error);
        }
    };

    const setUpContacts = (contacts: IContact[]) => {
        setContacts(contacts);
    };

    const contactsContext = {
        contacts: contacts,
        setUpContacts: setUpContacts,
        addNewContact: addContact,
        editContact: editContact,
        deleteContact: deleteContact,
    };

    return (
        <ContactsContext.Provider value={contactsContext}>
            {props.children}
        </ContactsContext.Provider>
    );
};

export default ContactsProvider;
