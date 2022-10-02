import Image from "next/image";

import styles from './list-item-icon.module.css';

interface Props {
    src: string;
    alt: string;
}

const ListItemIcon = (props: Props) => {
    return <Image 
                className={styles.icon}
                src={props.src} 
                alt={props.alt}
                layout="fixed"
                width={20}
                height={20}
                />;
}

export default ListItemIcon;