import React, { Component } from 'react';
// import Card from './components/card'
import CardList from '../components/cardList';
import Searchbox from '../components/searchbox';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/scroll';
import './App.css';
import './index.css';
// import { robots } from '../components/robots';



class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      robots: [] ,
      searchfield: ''
    }
  }
  componentDidMount() {
    // console.log('C.didmount',this.props.store.getState());
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}))
    
    console.log('check');
  }
  onSearchchange = (e) =>{
    this.setState({
        searchfield: e.target.value
    });
 }

  render() {
    const { robots, searchfield } = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
     <h1>Loading...</h1>:
    
     (
      <div className="tc">
        <h1 className="f1">Robo Friends</h1>
        <Searchbox searchChange={this.onSearchchange}/>
        <Scroll>
            <ErrorBoundary>
              <CardList robots={filterRobots}/>
            </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
