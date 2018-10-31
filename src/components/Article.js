// @flow
import React, {Component} from 'react';
import { sectionStyle, btnStyle, titleStyle } from './../style/ArticleStyle';

type Props = {
	article: {
		id: String,
		date: String,
		title: String,
		text: String
	},
	removeArticle(String):void
}
export default class Article extends Component<Props>{
	remove = (ev: any) => {
		let {article, removeArticle} = this.props

		let section = ev.target.parentNode;
		section.style.transition = "left 0.5s";
		section.style.left = "300px";
		setTimeout(() => {
			section.style.transition = "left 0s";
			section.style.left = "0px";
			removeArticle(article.id);
		}, 500);
	}
	render(){
		const article = this.props.article;
		
		return (
			<div style={sectionStyle}>
				<h3 style ={titleStyle}> {article.title} </h3>
				<button style = {btnStyle} onClick= { this.remove }>X</button>
				<section>
					{article.text}
				</section>
			</div>
		)
	}
}
