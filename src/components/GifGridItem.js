import React from 'react'


export const GifGridItem = ( {title, url} ) => {
    return (
        <div className="card animate__animated animate__fadeInLeft">
            <img alt={title} src={url}/>
            <p>{title.length < 20 ? title : title.substr(0,20)+'...' }</p>
        </div>
    )
}


