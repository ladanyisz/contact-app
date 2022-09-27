import React, { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import { ButtonType, ButtonVariation } from '../../models/ButtonType';
import { ProfilePicSize } from '../../models/ProfilePicSize';
import Button from '../Button/button';
import ProfilePic from '../ProfilePic/profile-pic';
import Input from './input';
import { defaultProfilePicture, emptyContact, IContact } from '../../models/Contact';

import styles from './contact-overlay.module.css';
import { ContactChangeMode } from '../../models/ContactChangeMode';
import ContactsContext from '../../context/ContactsContext';

interface Props {
    show: boolean;
    onClose: () => void;
    mode: ContactChangeMode;
    contact?: IContact;
}

const ContactOverlay = (props: Props) => {

    const contactsCtx = useContext(ContactsContext);

    
    const [contactDetails, setContactDetails] = useState<IContact>(emptyContact);

    const [profilePicChosen, setProfilePicChosen] = useState(false);
    const overlayRef = useRef(null);

    const {contact} = props;
    const {mode} = props;
    const {show} = props;
    useEffect(() => {
        if (mode === 'edit') {
            setContactDetails(contact);
        } else {
            setContactDetails(emptyContact);
        }
    }, [mode, contact, show]);

    const closeOverlay = () => {
        props.onClose();
        setContactDetails(emptyContact);
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLElement>) => {
        if (
            overlayRef.current &&
            props.show &&
            !overlayRef.current.contains(e.target)
        ) {
            closeOverlay();
        }
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files.length > 0) {
            setContactDetails((prevState) => {
                return {
                    ...prevState,
                    image: URL.createObjectURL(event.target.files[0]),
                };
            });
            setProfilePicChosen(true);
        }
    };

    const deletePic = () => {
        setContactDetails((prevState) => {
            return {
                ...prevState,
                image: defaultProfilePicture,
            };
        });
        setProfilePicChosen(false);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>)  => {
        setContactDetails(prevState => {
            return {
                ...prevState,
                name: e.target.value,
            }
        })
    }
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>)  => {
        setContactDetails(prevState => {
            return {
                ...prevState,
                phoneNum: e.target.value,
            }
        })
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>)  => {
        setContactDetails(prevState => {
            return {
                ...prevState,
                email: e.target.value,
            }
        })
    }

    const onDoneClicked = () => {
        if (mode === 'new') {
            contactsCtx.addNewContact(contactDetails);
        } else if (mode === 'edit') {
            contactsCtx.editContact(contactDetails);
        }
        closeOverlay();
    }

    let title = 'Add';
    if (mode === 'edit') title = 'Edit';

    const defaultButtons = (
        <Button
            btnType={ButtonType.Primary}
            btnVariation={ButtonVariation.IconAndText}
            icon='/icons/Add.svg'
            label='Add picture'
            type='file'
            onFileChange={handleFileChange}
        />
    );

    const picChosenButtons = (
        <div className={styles.picButtons}>
            <Button
                btnType={ButtonType.Primary}
                btnVariation={ButtonVariation.IconAndText}
                icon='/icons/Change.svg'
                label='Change picture'
                type='file'
                onFileChange={handleFileChange}
            />
            <Button
                btnType={ButtonType.Primary}
                btnVariation={ButtonVariation.Icon}
                icon='/icons/Delete.svg'
                onClickHandler={deletePic}
            />
        </div>
    );

    return (
        <div
            className={`${styles.backdrop} ${
                props.show ? styles.show : styles.hide
            }`}
            onClick={handleBackdropClick}
        >
            <div className={`${styles.overlay} G-100`} ref={overlayRef}>
                <div className={styles.info}>
                    <h2>{title} contact</h2>
                    <div className={styles.infoButtons}>
                        <ProfilePic
                            size={ProfilePicSize.Big}
                            src={contactDetails.image}
                        />
                        {!profilePicChosen && defaultButtons}
                        {profilePicChosen && picChosenButtons}
                    </div>
                    <div className={styles.inputDiv}>
                        <span className={`message secondary`}>Name</span>
                        <Input placeholder='Jamie Wright' value={contactDetails.name} onChange={handleNameChange}  />
                    </div>
                    <div className={styles.inputDiv}>
                        <span className={`message secondary`}>
                            Phone number
                        </span>
                        <Input placeholder='+01 234 5678' value={contactDetails.phoneNum} onChange={handlePhoneChange}/>
                    </div>
                    <div className={styles.inputDiv}>
                        <span className={`message secondary`}>
                            Email address
                        </span>
                        <Input placeholder='jamie.wright@mail.com' value={contactDetails.email} onChange={handleEmailChange}/>
                    </div>
                </div>
                <div className={styles.footer}>
                    <Button
                        btnType={ButtonType.Secondary}
                        btnVariation={ButtonVariation.Text}
                        label='Cancel'
                        onClickHandler={closeOverlay}
                    />
                    <Button
                        btnType={ButtonType.Primary}
                        btnVariation={ButtonVariation.Text}
                        label='Done'
                        onClickHandler={onDoneClicked}
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactOverlay;
