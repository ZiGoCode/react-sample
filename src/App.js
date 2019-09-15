import React, { Component } from 'react';
import './App.css';
import User from './user/User'
import Post from './post/Post';
import { Route, Link } from 'react-router-dom'
import Request from './lib/Request'

class App extends Component {
  state = {
    name: 'Naluebet Manpati'
  };

  onNameChange = name => this.setState({ name: name })

  render() {
    const { name } = this.state;
    return (
      <div>

        <div>
          Hello {name}
        </div>

        <div>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/posts">Posts</Link>
        </div>

        <Route path='/users'
          component={() => (
            <Request url="https://jsonplaceholder.typicode.com/users">
              {data => <User data={data}></User>}
            </Request>
          )}
        />
        <Route path='/posts' component={() => (
          <Request url="https://jsonplaceholder.typicode.com/posts">
            {data => <Post data={data}></Post>}
          </Request>
        )}></Route>
      </div>
    );
  }
}

export default App;
