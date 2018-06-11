import React, { Component } from 'react';
// import Card from './components/card'
import { connect } from 'react-redux';
import CardList from '../components/cardList';
import Searchbox from '../components/searchbox';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/scroll';
import './App.css';
import './index.css';
// import { robots } from '../components/robots';

import { setSearchField } from '../actions';



class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      robots: [] ,
      // searchfield: ''
    }
  }
  componentDidMount() {
    // console.log('C.didmount',this.props.store.getState());
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}))
    
    console.log('check');
  }
//   onSearchchange = (e) =>{
//     this.setState({
//         searchField: e.target.value
//     });
//  }

  render() {
    const { robots } = this.state;
    const {searchField, onSearchChange } = this.props;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
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
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (e) => dispatch(setSearchField(e.target.value))
 }
}
const mapStateToProps = state => {
  return {
      searchField: state.searchField
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
