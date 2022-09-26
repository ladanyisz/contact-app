import { Fragment } from "react";
import { IContact } from "../models/Contact";
import Contact from "./Contact/contact";


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
    return (
        <Fragment>
            <h1>Contacts</h1>
            <ul>
                {CONTACTS.map(contact => 
                <Contact key={contact.name} contact={contact}/>)}
            </ul>
        </Fragment>
    );
}

export default Contacts;