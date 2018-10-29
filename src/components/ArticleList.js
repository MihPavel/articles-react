import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'

const spaceStyle = {
	height: "104px",
	width: "10px"
}
const ulStyle = {
	listStyleType: "none",
	padding: "0px 30px 0px 5px",
	margin: "0px"
}

export default class ArticleList extends Component{
	static propTypes = {
		articles: PropTypes.array.isRequired,
		rangeArgicle: PropTypes.shape({
			start: PropTypes.number.isRequired,
			end: PropTypes.number.isRequired
		}).isRequired,
		removeArticle: PropTypes.func.isRequired
	}
	render(){
		let {articles, rangeArgicle, removeArticle} = this.props;
		let articleElements = [];

		for(let i = 0; i < articles.length; i += 1){
			if(i >= rangeArgicle.start && i <= rangeArgicle.end){
				let article = articles[i];
				articleElements.push(
					<li key = {article.id}>
						<Article article = {article} removeArticle = {removeArticle(article.id)}/>
					</li>
				);
			} else {
				articleElements.push(
					<li style={spaceStyle}></li>
				);
			}
		}
		return (
				<ul style={ulStyle}>{articleElements}</ul>
		)
	}
}