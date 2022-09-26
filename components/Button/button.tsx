import Image from 'next/image';
import { ButtonType, ButtonVariation } from '../../models/ButtonType';
import styles from './button.module.css';

export interface Props {
    type: ButtonType;
    variation: ButtonVariation;
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
            className={`${styles[props.type]} ${styles[props.variation]} ${
                styles.btn
            }`}
            onClick={props.onClickHandler}
        >
            {icon} {props.label}
        </button>
    );
};

export default Button;
