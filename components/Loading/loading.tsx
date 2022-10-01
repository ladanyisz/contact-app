import { useState } from 'react';
import styles from './loading.module.css';

const Loading = (props) => {

    const loading = {props};

    return (
        <div className={`${styles.loadingDiv} ${loading ? '' : styles.hide}`}>
            <p>Loading...</p>
        </div>
    );
}

export default Loading;