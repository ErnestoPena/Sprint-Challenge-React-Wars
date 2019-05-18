import React from 'react';

class MyApp extends React.Component {

    componentDidMount() {
        this.getCharacters('https://swapi.co/api/people');
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
        <h1>This is my </h1>
    }

}

export default MyApp;