import styles from './input.module.css';



const Input = (props) => {
    return (
        <input
            {...props}
            className={`G-80 ${styles.input} primary`}
        />
    );
};

export default Input;
