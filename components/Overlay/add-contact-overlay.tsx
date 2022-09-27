import React, { ChangeEvent, Fragment, useRef, useState } from 'react';
import { ButtonType, ButtonVariation } from '../../models/ButtonType';
import { ProfilePicSize } from '../../models/ProfilePicSize';
import Button from '../Button/button';
import ProfilePic from '../ProfilePic/profile-pic';
import styles from './add-contact-overlay.module.css';
import Input from './input';

interface Props {
    show: boolean;
    onClose: () => void;
}

const AddContactOverlay = (props: Props) => {
    const defaultProfilePicture = '/images/Default.png';
    const [picSrc, setPicSrc] = useState(defaultProfilePicture);
    const [profilePicChosen, setProfilePicChosen] = useState(false);
    const overlayRef = useRef(null);

    const closeOverlay = () => {
        props.onClose();
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
            setPicSrc(() =>
                URL.createObjectURL(event.target.files[0])
            );
            setProfilePicChosen(true);
        }
    };

    const deletePic = () => {
        setPicSrc(defaultProfilePicture);
        setProfilePicChosen(false);
    }

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
                    <h2>Add contact</h2>
                    <div className={styles.infoButtons}>
                        <ProfilePic size={ProfilePicSize.Big} src={picSrc} />
                        {!profilePicChosen && defaultButtons}
                        {profilePicChosen && picChosenButtons}
                    </div>
                    <div className={styles.inputDiv}>
                        <span className={`message secondary`}>Name</span>
                        <Input placeholder='Jamie Wright' />
                    </div>
                    <div className={styles.inputDiv}>
                        <span className={`message secondary`}>
                            Phone number
                        </span>
                        <Input placeholder='+01 234 5678' />
                    </div>
                    <div className={styles.inputDiv}>
                        <span className={`message secondary`}>
                            Email address
                        </span>
                        <Input placeholder='jamie.wright@mail.com' />
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
                    />
                </div>
            </div>
        </div>
    );
};

export default AddContactOverlay;
