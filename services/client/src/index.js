import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';  // nuevo
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';

class App extends Component {
  constructor() {
    super();
    // nuevo
  this.state = {
    users: []
  };
  };
  addUser(event) {
    event.preventDefault();
    console.log('sanity check!');
  };
  componentDidMount(){
    this.getUsers();
  };
    
  getUsers() {
    axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
    .then((res) => { this.setState({ users: res.data.data.users}); })
    .catch((err) => { console.log(err); });
  };

  render() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <br/>
            <h1 className="title is-1">Todos los usuarios</h1>
            <hr/><br/>
            <AddUser addUser={this.addUser}/>/>
            <br/><br/>
            <UsersList users={this.state.users}/>
          </div>
        </div>
      </div>
    </section>
  )
  }
};


ReactDOM.render(
  <App />, 
  document.getElementById('root')
);