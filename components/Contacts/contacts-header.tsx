import { ButtonType, ButtonVariation } from '../../models/ButtonType';
import Button from '../Button/button';

import styles from './contacts-header.module.css';

const ContactsHeader = () => {
    return (
        <div className={styles.contactsHeader}>
            <h1>Contacts</h1>
            <div className={styles.buttonsDiv}>
                <Button
                    btnType={ButtonType.Secondary}
                    btnVariation={ButtonVariation.Icon}
                    icon='/icons/Settings.svg'
                />
                <Button
                    btnType={ButtonType.Secondary}
                    btnVariation={ButtonVariation.Icon}
                    icon='/icons/Profile pic.svg'
                />
                <Button
                    btnType={ButtonType.Special}
                    btnVariation={ButtonVariation.IconAndText}
                    icon='/icons/Add.svg'
                    label='Add new'
                />
            </div>
        </div>
    );
};

export default ContactsHeader;