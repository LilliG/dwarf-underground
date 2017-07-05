import React, { Component } from 'react'
import './Article.css'
import ArticleHeading from './Article Heading'
import ArticleBody from './Article Body'
import ArticleFooter from './Article Footer'

class Article extends Component {
    render() {
        return(
        <div className="large-8 medium-12 columns article">
            <ArticleHeading />
            <ArticleBody />
            <ArticleFooter />
        </div>
        )
    }
}

export default Article