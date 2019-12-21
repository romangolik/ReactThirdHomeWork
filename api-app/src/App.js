import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/people';

    fetch(url)
        .then(response => response.json())
        .then(people => this.setState({ data: people.results }))
  }


  render() {
    return (
        <div className="App">
          <h1>API</h1>
          <div>
            <ul>
              {
                this.state.data.map(item => {
                  return <li key={item.name} style={{listStyle: "none"}}>
                    Name: {item.name},
                    Height: {item.height},
                    Mass: {item.mass}
                  </li>
                })
              }
            </ul>
          </div>
        </div>
    );
  }
}

export default App;
