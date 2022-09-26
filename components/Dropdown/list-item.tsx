import React from "react";
import ListItemIcon from "./list-item-icon";

import styles from './list-item.module.css';

interface Props {
    icon: string;
    alt: string;
    label: string;
}

const ListItem = React.forwardRef<HTMLElement, Props>((props, ref) => {
    return (
        <span className={styles.listItem}>
            <ListItemIcon src={props.icon} alt={props.alt}/> <span>{props.label}</span>
        </span>
    );
});

ListItem.displayName = 'ListItem';

export default ListItem;