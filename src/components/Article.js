import React from 'react';

const Article = ({data, isSmall}) => {
    return (
        <a href={data.url} target="_blank" div className={isSmall ? 'article article--small' : 'article'}>
            <img className="article__image" src={data.urlToImage} alt="" />
            <div className="article__source">{data.source.name}</div>
            <div className="article__title"> {data.title} </div>
        </a>
    )
}

export default Article;