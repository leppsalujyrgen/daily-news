import React, { useState } from 'react';
import client from '../apollo';
import gql from 'graphql-tag';
import Article from './Article';


const query =  gql`
query{
    articles {
      title
      source{
        name
      }
      urlToImage
      url
    }
}`

const ArticleFeed = () => {

    const [data, setData] = useState([])

    client.query({query})
    .then(response => setData(response.data.articles))
    .catch(error => console.log(error))

    return(
        <div className="feed">
            { data.map((article, indeks) => (
            <Article 
                isSmall={(indeks + 1) % 5 == 0 || (indeks + 2) % 5 == 0 || (indeks + 3) % 5 == 0} 
                data={article} 
                key={indeks}
            />))}    
             Made with <a href="https://newsapi.org/" target="__blank">NewsApi.org</a>    
        </div>
    )
}

export default ArticleFeed;