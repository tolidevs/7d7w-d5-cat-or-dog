import React from 'react';

const Picture = ({classes, url, altText}) => {
    return <img className={classes} src={url} alt={altText}></img>
}

export default Picture