import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const articleStyle = {
	height: "100px",
	margin: "2px 0px",
	borderBottom: "1px solid dodgerblue",
	position: "relative"
}
const btnStyle = {
	borderRadius: "10px",
	position: "absolute",
	left: "250px",
	top: "40px",
	background: "dodgerblue",
	color: "white",
	border: "1px solid white"
}
const titleStyle = {
	margin: "0px",
	color: "dodgerblue"
}
export default class Article extends Component{
	static propTypes = {
		article: PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired
		}).isRequired,
		removeArticle: PropTypes.func.isRequired
	}
	remove(ev){
		let article = ev.nativeEvent.target.parentElement;
		const {removeArticle} = this.props;
		console.log(article);
		setTimeout(() => removeArticle(), 1500);
	}
	render(){
		const {article} = this.props;
		return (
			<div>
				<ReactCSSTransitionGroup transitionName="anim" transitionEnterTimeout={0} transitionLeaveTimeout={0}>
				<div style={articleStyle}>
					<h3 style ={titleStyle}> {article.title} </h3>
					<button style = {btnStyle} onClick= { this.remove.bind(this) }>X</button>
					<section>
						{article.text}
					</section>
				</div>
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}
