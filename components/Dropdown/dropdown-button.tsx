import React from 'react'

const DropdownButton = React.forwardRef<HTMLElement, any>(({ children, onClick }, ref) => (
    <span
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </span>
  ));


DropdownButton.displayName = 'DropdownButton';

export default DropdownButton;