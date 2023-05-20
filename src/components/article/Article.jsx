import React from 'react'
import './article.css'
import ArticlePosts from "./ArticlePosts";
import article1 from './../../assets/article1.png'
import article2 from './../../assets/article2.png'
import article3 from './../../assets/article3.png'


const Article = () => {
  return (
    <div className="book-article">
      <div className="book-article_container">
        <div className="primary-heading">Articles & Resources</div>

        <hr className='book-article-line'/>
        
        <div className="book-article_container-posts">

        <ArticlePosts 
        image={article1}
        title="The energy efficiency offers hydrotherapy or swim"
        text="The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
        author="Jonathan - 23.05.2022"
        />

        <ArticlePosts 
        image={article2}
        title="Release of Letraset sheets tools containing passages"
        text="The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
        author="Rita - 23.05.2022"
        />

        <ArticlePosts 
        image={article3}
        title="The energy efficiency offers hydrotherapy or swim"
        text="The point of using Lorem Ipsum hiter of that using making it look like others readable will get end."
        author="Ephraim - 23.05.2022"
        />
         </div>

      </div>
    </div>
  )
}

export default Article