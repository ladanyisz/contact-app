import React, { useState } from 'react'
import { Form } from 'react-bootstrap';

import styles from './list.module.css';

const List = React.forwardRef<HTMLDivElement, any>( ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {

    return (
      <div
        ref={ref}
        style={style}
        className={`${className} ${styles.list}`}
        aria-labelledby={labeledBy}
      >
        <ul className={`list-unstyled ${styles.list}`}>
          {React.Children.toArray(children)}
        </ul>
      </div>
    );
  },
);

List.displayName = 'List';

export default List;