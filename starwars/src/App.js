import React, { Component } from 'react';
import './App.css';
import Card_Info from './components/card_info'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
      render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="card_container_main">
            {this.state.starwarsChars.map(arraymapped =>(
              <Card_Info info_passed= {arraymapped} key={arraymapped.name}/>
            ))};
        </div>
      </div>
    );
  }
}

export default App;
