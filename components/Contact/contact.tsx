import { Dropdown } from 'react-bootstrap';
import { ButtonType, ButtonVariation } from '../../models/ButtonType';
import { IContact } from '../../models/Contact';
import { ProfilePicSize } from '../../models/ProfilePicSize';
import Button from '../Button/button';
import DropdownButton from '../Dropdown/dropdown-button';
import List from '../Dropdown/list';
import ListItem from '../Dropdown/list-item';
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
                    btnType={ButtonType.Secondary}
                    btnVariation={ButtonVariation.Icon}
                    icon='/icons/Mute.svg'
                    alt='Mute'
                />
                <Button
                    btnType={ButtonType.Secondary}
                    btnVariation={ButtonVariation.Icon}
                    icon='/icons/Call.svg'
                    alt='Call'
                />
                {/* <Button
                    btnType={ButtonType.Secondary}
                    btnVariation={ButtonVariation.Icon}
                    icon='/icons/More.svg'
                    alt='More'
                    data-bs-toggle="dropdown" aria-expanded="false"
                /> */}
                <Dropdown>
                    <Dropdown.Toggle as={DropdownButton}>
                        <Button
                            btnType={ButtonType.Secondary}
                            btnVariation={ButtonVariation.Icon}
                            icon='/icons/More.svg'
                            alt='More'
                            data-bs-toggle="dropdown" aria-expanded="false"
                        />
                    </Dropdown.Toggle>
                    <Dropdown.Menu as={List}>
                        <Dropdown.Item as={ListItem} icon="/icons/Settings.svg" alt='Edit' label='Edit'/>
                        <Dropdown.Item as={ListItem} icon="/icons/Favourite.svg" alt='Favourite' label='Favourite'/>
                        <Dropdown.Item as={ListItem} icon="/icons/Delete.svg" alt='Remove' label='Remove'/>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
};

export default Contact;
