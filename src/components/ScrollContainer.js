// @flow
import React, {Component} from 'react';
import ArticleList from './ArticleList';
import { scrollContainerStyle } from './../style/ScrollContainerStyle';

export default class ScrollContainer extends Component{
	state = {
		scroll: 0,
		articles: this.props.articles
	}
	removeArticle = (idArticleRemove) => {
		let articles = this.state.articles;
		let newStateArticles = articles.filter((NextArticle) => {
			if(NextArticle.id != idArticleRemove){
				return NextArticle;
			}
		});
		this.setState({
			articles: newStateArticles
		});
	}
  onscroll = (e) => {
    let newScroll = e.target.scrollTop;
		this.setState({
			scroll: newScroll
		});
	}
  render(){
		let {scroll, articles} = this.state;
    return(
      <div style={scrollContainerStyle} onScroll={this.onscroll}>
				<ArticleList articles = {articles}
										 scroll = {scroll}
										 removeArticle = {this.removeArticle}/>
      </div>
    )
  }
}
