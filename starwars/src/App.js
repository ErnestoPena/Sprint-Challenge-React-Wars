import React, { Component } from 'react';
import './App.css';
import CardInfo from './components/card_info';
import MyHeader from './components/header';

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

  before = e => {
    e.preventDefault();
    console.log(e);
  }

  after = e => {
    e.preventDefault();
    console.log(e)
  }
      render() {
    return (
      <div className="App">
        <MyHeader/>
        <div className="card_container_main">
            {this.state.starwarsChars.map(arraymapped =>(
              <CardInfo info_passed= {arraymapped} key={arraymapped.name}/>
            ))};
        </div>
      </div>
    );
  }
}

export default App;
