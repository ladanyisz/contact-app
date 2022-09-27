import { useState } from 'react';
import { IContact } from '../models/Contact';
import ContactsContext, { ContextData } from './ContactsContext';

const ContactsProvider = (props) => {
    const [contextData, setContextData] = useState<ContextData>({
        contacts: [],
        mode: 'new',
    });

    const _addContact = async (contact: IContact) => {
        const response = await fetch('/api/addContact', {
            method: 'POST',
            body: JSON.stringify(contact)
        })

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        console.log(response);
        return await response.json();
    };

    const addContact = async (contact: IContact) => {
        try {
            const newContact = await _addContact(contact);
            setContextData((prevState) => {
                return {
                    mode: prevState.mode,
                    contacts: [...prevState.contacts, newContact]
                }
            })
        } catch (error) {
            console.log(error);
            
        }
    }

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

    const setUpContacts = (contacts: IContact[]) => {
        setContextData(() => {
            return {
                mode: 'new',
                contacts: contacts
            };
        })
    }

    const contactsContext = {
        contacts: contextData.contacts,
        mode: contextData.mode,
        setUpContacts: setUpContacts,
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
