import styles from './loading.module.css';

const Loading = (props) => {

    const {loading} = props;

    return (
        <div className={`${styles.loadingDiv} ${loading ? '' : styles.hide}`}>
            <span className={styles.loader}></span>
        </div>
    );
}

export default Loading;