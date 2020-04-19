import React, { Component } from 'react';
import './App.css'
import { Cardlist } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/searchBox.component/searchBox';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())

      .then(user => { this.setState({ monsters: user }) })

  }

  /*searchbox = (e) => {
    this.setState({
      searchField : e.target.value
    })
    <input type='search' placeholder='searchBox' onChange={e=>this.setState({searchField:e.target.value})}/>
  }*/
  handleChange=e=>{
    this.setState({searchField:e.target.value})
  }
  
  render() {

    const { monsters, searchField } = this.state

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox  placeholder = {'search Monsters'} handleChange={this.handleChange}/>
        <Cardlist monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;