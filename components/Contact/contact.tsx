import { ButtonType, ButtonVariation } from '../../models/ButtonType';
import { IContact } from '../../models/Contact';
import { ProfilePicSize } from '../../models/ProfilePicSize';
import Button from '../Button/button';
import ListItemIcon from '../list-item-icon';
import ProfilePic from '../ProfilePic/profile-pic';

import styles from './contact.module.css';

const Contact = (props: { contact: IContact }) => {
    const contact = props.contact;
    const altMessage = 'profile picture of ' + contact.name;

    return (
        <div className={`d-flex ${styles.contactItem}`}>
            <div className={`d-flex ${styles.info}`}>
                <ProfilePic src={contact.image} size={ProfilePicSize.Small} />
                <div className='d-flex flex-column justify-content-center'>
                    <h3>{contact.name}</h3>
                    <span className='message secondary'>
                        {contact.phoneNum}
                    </span>
                </div>
            </div>

            <div className={styles.actionButtons}>
                <Button
                    type={ButtonType.Secondary}
                    variation={ButtonVariation.Icon}
                    icon='/icons/Mute.svg'
                    alt='Mute'
                />
                <Button
                    type={ButtonType.Secondary}
                    variation={ButtonVariation.Icon}
                    icon='/icons/Call.svg'
                    alt='Call'
                />
                <Button
                    type={ButtonType.Secondary}
                    variation={ButtonVariation.Icon}
                    icon='/icons/More.svg'
                    alt='More'
                    data-bs-toggle="dropdown" aria-expanded="false"
                />
                <ul className='dropdown-menu'>
                    <li><a className='dropdown-item'>A</a></li>
                    <li><a className='dropdown-item'>B</a></li>
                    <li><a className='dropdown-item'>C</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;
