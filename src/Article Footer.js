import React, { Component } from 'react'
import './Article Footer.css'

class ArticleFooter extends Component {
    handleClick = () => {
      const Item = document.getElementById('comment-box')
      Item.classList.toggle('hidden')
    }

    render() {
        return(
        <div>
        <div className="article-links">
          <a className="article-link" href="#" onClick={this.handleClick}>
            <i className="fa fa-comments-o"></i>
            <span className="article-link-text">Comments</span>
          </a>
          <a className="article-link" href="#">
            <i className="fa fa-share"></i>
            <span className="article-link-text">Share Post</span>
          </a>
        </div>
        <form id="comment-box" className="hidden">
            <input type="text" name="comment" placeholder="Add a comment and press enter to submit" />
        </form>
        </div>
        )
    }
}

export default ArticleFooter