import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/cardList';
import Searchbox from '../components/searchbox';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/scroll';
import './App.css';
import './index.css';

import { setSearchField, requestRobots } from '../actions';



class App extends Component {
  // constructor(props){
  //   super(props);
    
  //   this.state = {
  //     robots: [] ,
  //     // searchfield: ''
  //   }
  // }
  componentDidMount() {
    this.props.onRequestRobots();
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => this.setState({robots: users}))
    
   }


  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
   
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
     <h1>Loading...</h1>:
    
     (
      <div className="tc">
        <h1 className="f1">Robo Friends</h1>
        <Searchbox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filterRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
 }
}
const mapStateToProps = state => {
  return {
      searchField: state.searchRobots.searchField,
      robots: state.requestRobots.robots,
      isPending: state.requestRobots.isPending,
      error: state.requestRobots.error
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
