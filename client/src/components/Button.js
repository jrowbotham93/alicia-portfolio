import React from 'react';
import '../styles/components/button.scss';

  const Button = ({ styles, text }) => { 
    return(
    <button className={"Button thick-black-border large-text " + styles}>
      {text}
    </button>
    );
  }

export default Button;
