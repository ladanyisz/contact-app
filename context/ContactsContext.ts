import { createContext } from "react";
import { IContact } from "../models/Contact";
import { ContactChangeMode } from "../models/ContactChangeMode";

export interface ContextData {
    contacts: IContact[];
    mode: ContactChangeMode;
}

const ContactsContext = createContext({
    contacts: [],
    mode: "new",
    addNewContact: (contact: IContact) => {},
    editContact: (contact: IContact) => {},
    deleteContact: (id: string) => {}
});

export default ContactsContext;