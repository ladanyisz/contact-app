import { Fragment, useContext, useState } from 'react';
import ContactsContext from '../../context/ContactsContext';
import { IContact } from '../../models/Contact';
import { ContactChangeMode } from '../../models/ContactChangeMode';
import Contact from '../Contact/contact';
import ContactOverlay from '../Overlay/contact-overlay';
import ContactsHeader from './contacts-header';

import styles from './contacts.module.css';

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
            <div></div>
            <div>
                <ul className={styles.ul}>
                    {contactsCtx.contacts &&
                    contactsCtx.contacts.map((contact) => (
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
            </div>
            <div></div>
        </Fragment>
    );
};

export default Contacts;
