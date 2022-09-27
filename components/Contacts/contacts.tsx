import { Fragment, useState } from "react";
import { IContact } from "../../models/Contact";
import Contact from "../Contact/contact";
import AddContactOverlay from "../Overlay/add-contact-overlay";
import ContactsHeader from "./contacts-header";



const CONTACTS: IContact[] = [
    {
        name: 'Timothy Lewis',
        image: '/images/Timothy.png',
        phoneNum: '+36 01 234 5678'
    },
    {
        name: 'Sarah Wright',
        image: '/images/Sarah.png',
        phoneNum: '+36 01 234 5678'
    },
    {
        name: 'Lucy Jones',
        image: '/images/Lucy.png',
        phoneNum: '+36 01 234 5678'
    }
];

const Contacts = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const handleOnClose = () => {
        setShowOverlay(false);
    }
    const handleOnOpen = () => {
        setShowOverlay(true);
    }

    return (
        <Fragment>
            <ContactsHeader addNewClicked={handleOnOpen} />
            <ul>
                {CONTACTS.map(contact => 
                <Contact key={contact.name} contact={contact}/>)}
            </ul>
            <AddContactOverlay onClose={handleOnClose} show={showOverlay} />
        </Fragment>
    );
}

export default Contacts;