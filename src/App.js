import React, {Component} from 'react';
import NavBar from './components/navBar/navBar.component';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          noteContent: 'firstnote',
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
