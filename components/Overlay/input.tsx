import styles from './input.module.css';

interface Props {
    placeholder?: string;
}

const Input = (props: Props) => {
    return (
        <input
            className={`G-80 ${styles.input} primary`}
            placeholder={props.placeholder}
        />
    );
};

export default Input;
