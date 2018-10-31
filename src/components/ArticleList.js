// @flow
import React, {Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import { articleCollectionStyle } from './../style/ArticleListStyle';

export default class ArticleList extends Component{
	static propTypes = {
		articles: PropTypes.array.isRequired,
		scroll: PropTypes.number,
    removeArticle: PropTypes.func.isRequired
	}
	getRangeArticle(scroll){
    const ARTICLE_HEIGHT = 100;

		if(scroll < ARTICLE_HEIGHT){
			scroll = ARTICLE_HEIGHT;
		}
		return {
			start: Math.floor((scroll - ARTICLE_HEIGHT) / ARTICLE_HEIGHT),
			end: Math.floor((scroll + ARTICLE_HEIGHT * 3) / ARTICLE_HEIGHT)
		};
	}
	cons(param){
		console.log(param);
	}
	render(){
		let {articles, removeArticle, scroll} = this.props;
		let range = this.getRangeArticle(scroll);
		let articleElements = articles.map((article, index) => {
			
			if(index >= range.start && index <= range.end){
				return <li key={article.id}><Article article = {article} removeArticle = {removeArticle}/></li>
			}
		});

		let spaceBeforeStyle = {
			height: `${(range.start) * 100}px`
		};
		let spaceAfterStyle = {
			height: `${(articles.length - range.end - 1) * 100}px`
		};
		return (
      <div>
				<div style = {spaceBeforeStyle}></div>
      	<ul style={articleCollectionStyle}>{articleElements}</ul>
				<div style = {spaceAfterStyle}></div>
			</div>
		)
	}
}