import { ButtonType, ButtonVariation } from '../../models/ButtonType';
import Button from '../Button/button';

import styles from './contacts-header.module.css';

interface Props {
    addNewClicked: () => void;
}

const ContactsHeader = (props: Props) => {

    const addNewHandler = () => {
        props.addNewClicked();
    }

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
                    onClickHandler={addNewHandler}
                />
            </div>
        </div>
    );
};

export default ContactsHeader;
