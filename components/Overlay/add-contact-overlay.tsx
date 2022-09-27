import { Fragment, useState } from 'react';
import { ButtonType, ButtonVariation } from '../../models/ButtonType';
import { ProfilePicSize } from '../../models/ProfilePicSize';
import Button from '../Button/button';
import ProfilePic from '../ProfilePic/profile-pic';
import styles from './add-contact-overlay.module.css';
import Input from './input';

interface Props {
    show: boolean;
}

const AddContactOverlay = (props: Props) => {
    const [picSrc, setPicSrc] = useState('/images/Default.png');
    const [profilePicChosen, setProfilePicChosen] = useState(true);

    const defaultButtons = (
        <Button
            btnType={ButtonType.Primary}
            btnVariation={ButtonVariation.IconAndText}
            icon='/icons/Add.svg'
            label='Add picture'
        />
    );

    const picChosenButtons = (
        <div className={styles.picButtons}>
            <Button
                btnType={ButtonType.Primary}
                btnVariation={ButtonVariation.IconAndText}
                icon='/icons/Change.svg'
                label='Change picture'
            />
            <Button
                btnType={ButtonType.Primary}
                btnVariation={ButtonVariation.Icon}
                icon='/icons/Delete.svg'
            />
        </div>
    );

    return (
        <div className={`${styles.backdrop} ${props.show ? 'show' : 'hide'}`}>
            <div className={`${styles.overlay} G-100`}>
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
