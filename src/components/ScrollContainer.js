import React, {Component} from 'react'
import ArticleList from './ArticleList'

const containerStyle = {
	overflow: "auto",
	height: "300px",
	width: "300px",
	border: "1px solid black"
}

export default class ScrollContainer extends Component{
	constructor(props){
		super(props);
		this.state = {
			scroll: 0,
			count: props.articles.length
		}
		this.articles = this.props.articles;
	}
	removeArticle = (id) => () => {
		for (let i = 0; i < this.articles.length; i +=1){
			if(this.articles[i].id === id){
				this.articles.splice(i, 1);
				this.setState({
					count: this.articles.length
				});
				break;
			}
		}
	}
  onscroll = (ev) =>{
		let oldScroll = this.state.scroll;
    let newScroll = ev.nativeEvent.target.scrollTop;
    
		if(Math.abs(newScroll - oldScroll) > 50){
			this.setState({
				scroll: newScroll
			});
			console.log(newScroll);
		}
  }
  getRangeRenderArticle = () => {
    let {scroll} = this.state;
    const ARTICLE_HEIGHT = 100;

		if(scroll < ARTICLE_HEIGHT){
			scroll = ARTICLE_HEIGHT;
		}
		return {
			start: Math.floor((scroll - ARTICLE_HEIGHT) / ARTICLE_HEIGHT),
			end: Math.floor((scroll + ARTICLE_HEIGHT * 3) / ARTICLE_HEIGHT)
		}
	}
  render(){
		
    let rangeArgicle = this.getRangeRenderArticle();

    return(
      <div style={containerStyle} onScroll={this.onscroll}>
				<ArticleList articles = {this.articles} 
										 rangeArgicle = {rangeArgicle} 
										 removeArticle = {this.removeArticle}/>
      </div>
    )
  }
}
