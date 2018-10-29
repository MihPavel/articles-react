import React from 'react'
import { render } from 'react-dom'
import ScrollContainer from './components/ScrollContainer'
import { articles } from './data'

render(<ScrollContainer articles = {articles} />, document.getElementById('container'))