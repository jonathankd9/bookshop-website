import React from 'react'
import './articleposts.css'


const ArticlePosts = ({image, title, text, author}) => {
  return (
    <div className="article_posts">

          <div className="posts-card">
              <img className='posts-card_image' src={image} />


              <div className="posts-card_whitecard">
                <div className="posts-card_title">{title} </div>
                <div className="posts-card_text">{text} </div>

                
                <div className="posts-card_footer">
                  <div className="posts-card_footer-readmore">Read more</div>
                  <div className="posts-card_footer-author">{author}</div>
                </div>
              </div>
          </div>

    </div>
  )
}

export default ArticlePosts

