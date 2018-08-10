import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import AppHeader from './components/AppHeader';
import ContactList from './components/ContactList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <main className='ui main text container'>
          <ContactList />
        </main>
      </div>
    );
  }
}

//ReactDOM.render(<App />, document.getElementById('app'));

export default App;
