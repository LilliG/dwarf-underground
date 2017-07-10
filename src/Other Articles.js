import React, { Component } from 'react'
import './Other Articles.css'

let articleLinks = [
  {imageURL:"https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
  title:"Single Orcs in Indianapolis" }, 
  {imageURL:"https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
  title:"You won't believe what's under this mountain" }, 
  {imageURL:"http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
  title:"Mine 20% more gold with One Weird Trick"}, 
  {imageURL:"http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
  title:"Surprise for Indiana Hobbits born before 1999" }
  ]

class ArticleLink extends Component {
    render() {
        return(
        <div className="small-6 medium-3 columns other-article">
          <a href="#">
            <img src={this.props.imageURL} alt="orc" />
            <p>{this.props.title}</p>
          </a>  
        </div>
        )
    }
}

class OtherArticles extends Component {
    render() {
        return(
        // {articleLinks.map((articleLink) => {
        //       <ArticleLink
        //       imageURL=articleLink.imageURL
        //       title=articleLinks.title
        //       />
        // })}
        <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            <ArticleLink
              imageURL="https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif"
              title="Single Orcs in Indianapolis" 
            />
            <ArticleLink 
              imageURL="https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg"
              title="You won't believe what's under this mountain" 
            />
            <ArticleLink 
              imageURL="http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg"
              title="Mine 20% more gold with One Weird Trick" 
            />
            <ArticleLink 
              imageURL="http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg"
              title="Surprise for Indiana Hobbits born before 1999" 
            />
        </div>
        )
    }
}

export default OtherArticles