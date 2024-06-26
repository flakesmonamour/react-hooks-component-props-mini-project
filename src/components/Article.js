import React from 'react';

function Article ({title,date ="January 1, 1980", preview}){
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;