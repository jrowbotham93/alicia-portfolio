import React from 'react';
  
const ContentContainer = ({ 
  title, 
  content, 
  src, 
  alt, 
  onMouseLeave, 
  onMouseEnter, 
  styles }) => {
  
    return(
      <div className={ "thick-black-border margin-4 " + styles }
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        <h1 className="large-text">{title}</h1>
        <img src={src} alt={alt}/>
        <p className="large-text">{content}</p>
      </div>
    );
  }

export default ContentContainer;
