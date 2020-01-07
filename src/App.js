import React, { Component } from 'react';
import { SearchBox } from './components/search-box/search-box';
import { CardList } from './components/card-list/card-list';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField : ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(jsonUsers => this.setState({users : jsonUsers}))
  }

  handleChange = e => {
    this.setState({searchField : e.target.value})
  }

  render() {
    const { users, searchField} = this.state;
    const filteredUsers = users.filter(user => (user.name.toLowerCase()).includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1 className="title">Rolodex</h1>
        <p className="subtitle">by Allan Francisco Revolorio - Developer</p>
        <SearchBox 
          placeholder = "Search users"
          handleChange = { this.handleChange }
        />  
        <CardList users={filteredUsers}></CardList>
      </div>
    );
  }
}

export default App;
