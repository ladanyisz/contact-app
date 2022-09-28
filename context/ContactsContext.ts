import { createContext } from "react";
import { IContact } from "../models/Contact";
import { ContactChangeMode } from "../models/ContactChangeMode";

export interface ContextData {
    contacts: IContact[];
}

const ContactsContext = createContext({
    contacts: [],
    setUpContacts: (contacts: IContact[]) => {},
    addNewContact: (contact: IContact) => {},
    editContact: (contact: IContact) => {},
    deleteContact: (id: string) => {}
});

export default ContactsContext;