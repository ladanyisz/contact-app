import Image from 'next/image';
import { ButtonType, ButtonVariation } from '../../models/ButtonType';
import styles from './button.module.css';

export interface Props {
    btnType: ButtonType;
    btnVariation: ButtonVariation;
    label?: string;
    icon?: string;
    alt?: string;
    onClickHandler?: () => {};
}

const Button = (props: Props) => {
    let icon;
    if (props.icon) {
        icon = (
            <Image
                src={props.icon}
                alt={props.alt}
                layout='fixed'
                width={24}
                height={24}
            />
        );
    }

    return (
        <button
            type='button'
            className={`${styles[props.btnType]} ${styles[props.btnVariation]} ${
                styles.btn
            }`}
            onClick={props.onClickHandler}
        >
            {icon} {props.label}
        </button>
    );
};

export default Button;
