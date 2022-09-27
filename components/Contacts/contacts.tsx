import { Fragment, useContext, useState } from 'react';
import ContactsContext from '../../context/ContactsContext';
import ContactsProvider from '../../context/ContactsProvider';
import { IContact } from '../../models/Contact';
import { ContactChangeMode } from '../../models/ContactChangeMode';
import Contact from '../Contact/contact';
import ContactOverlay from '../Overlay/contact-overlay';
import ContactsHeader from './contacts-header';


const Contacts = () => {
    const contactsCtx = useContext(ContactsContext);

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
                {contactsCtx.contacts.map((contact) => (
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
