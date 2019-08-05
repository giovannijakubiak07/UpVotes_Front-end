import React, { Component } from 'react'
import './App.css';
import Posts from './components/posts';
import SavePost from './components/savePost';

class App extends Component {

  state = {
    posts: []
  }
  
  componentDidMount() {
    fetch('https://segware-upvotes-api.herokuapp.com/api/posts')
    .then(res => res.json())
    .then((data) => {
      this.setState({ posts: data })
    })
    .catch(console.log)
  }
  componentDidUpdate() {
    fetch('https://segware-upvotes-api.herokuapp.com/api/posts')
    .then(res => res.json())
    .then((data) => {
      this.setState({ posts: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <div>
        <SavePost/>
        <Posts posts={this.state.posts}/>
      </div>
      )
  }
}

export default App;
