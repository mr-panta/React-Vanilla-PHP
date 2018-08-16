import React, { Component } from 'react'
import axios from 'axios'

import env from './env'
import logo from './logo.svg'
import './App.css'

axios.defaults.withCredentials = true
const backendRoot = env.backendRoot

class App extends Component {

  state = {
    username: '',
    isLogin: false,
  }

  componentDidMount = async () => {
    try {
      const { data } = await axios.get(`${backendRoot}/isLogin.php`)
      console.log(data)
      this.setState({ 
        isLogin:  data.is_login,
        username: data.username,
      })
    } catch(err) {
      console.warn(err)
    }
  }

  onLogin = async () => {
    try {
      const { data } = await axios.post(`${backendRoot}/login.php`, { username: this.state.username })
      console.log(data)
      if(data.status === 'OK') {
        this.setState({
          username: this.state.username,
          isLogin: true,
        })
      }
    } catch(err) {
      console.warn(err)
    }
  }

  onLogout = async () => {
    try {
      const { data } = await axios.post(`${backendRoot}/logout.php`)
      console.log(data)
      if(data.status === 'OK') {
        this.setState({
          username: '',
          isLogin: false,
        })
      }
    } catch(err) {
      console.warn(err)
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {
            !this.state.isLogin &&
            <div>
              <input
                type="text"
                placeholder="Username"
                onChange={e => this.setState({ username: e.target.value })}
                value={this.state.username} 
                autoFocus
              />
              <button onClick={this.onLogin}>Login</button>
            </div>
          }

          {
            this.state.isLogin &&
            <div>
              <div>username: {this.state.username}</div>
              <button onClick={this.onLogout}>Logout</button>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
