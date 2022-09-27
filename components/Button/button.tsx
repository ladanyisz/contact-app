import Image from 'next/image';
import { ChangeEvent, Fragment } from 'react';
import { ButtonType, ButtonVariation } from '../../models/ButtonType';
import styles from './button.module.css';

export interface Props {
    btnType: ButtonType;
    btnVariation: ButtonVariation;
    label?: string;
    icon?: string;
    alt?: string;
    onClickHandler?: () => void;
    onFileChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
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

    const isFileUpload = props.type === 'file';

    const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.onFileChange(event);
    }

    const classes = `
            ${styles[props.btnType]} 
            ${styles[props.btnVariation]} 
            ${styles.btn}`;

    const btn = (
        <button
            type='button'
            className={classes}
            onClick={props.onClickHandler}
        >
            {icon} {props.label}
        </button>
    );

    if (isFileUpload) {
        return (
            <Fragment>
                <input type='file' id='file-upload' onChange={onFileChange} hidden />
                <label
                    htmlFor='file-upload'
                    className={classes}
                >
                    {icon} {props.label}
                </label>
            </Fragment>
        );
    }

    return <Fragment>{btn}</Fragment>;
};

export default Button;
