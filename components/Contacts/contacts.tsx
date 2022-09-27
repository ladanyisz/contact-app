import { Fragment, useState } from 'react';
import { IContact } from '../../models/Contact';
import Contact from '../Contact/contact';
import ContactOverlay, { ContactChangeMode } from '../Overlay/contact-overlay';
import ContactsHeader from './contacts-header';

const CONTACTS: IContact[] = [
    {
        id: '1',
        name: 'Timothy Lewis',
        image: '/images/Timothy.png',
        phoneNum: '+36 01 234 5678',
        email: 'timothy@mail.com'
    },
    {
        id: '2',
        name: 'Sarah Wright',
        image: '/images/Sarah.png',
        phoneNum: '+36 01 234 5678',
        email: 'sarah@mail.com'
    },
    {
        id: '3',
        name: 'Lucy Jones',
        image: '/images/Lucy.png',
        phoneNum: '+36 01 234 5678',
        email: 'lucy@mail.com'
    },
];

const Contacts = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayMode, setOverlayMode] = useState<ContactChangeMode>('new');
    const [contact, setContact] = useState(null);

    const handleOnClose = () => {
        setShowOverlay(false);
    };
    const handleAddNewClicked = () => {
        setShowOverlay(true);
        setOverlayMode('new');
    };

    const handleEditClicked = (_contact: IContact) => {
        setOverlayMode('edit');
        setShowOverlay(true);
        setContact(_contact);
    };

    return (
        <Fragment>
            <ContactsHeader addNewClicked={handleAddNewClicked} />
            <ul>
                {CONTACTS.map((contact) => (
                    <Contact
                        key={contact.name}
                        contact={contact}
                        editClicked={handleEditClicked}
                    />
                ))}
            </ul>
            <ContactOverlay
                onClose={handleOnClose}
                show={showOverlay}
                mode={overlayMode}
                contact={contact}
            />
        </Fragment>
    );
};

export default Contacts;
