import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class EmpSearch extends Component{
  constructor(props){
      super(props);
      this.state={
        searchQuery: '',
      }

  }

  handleInputChange=()=>{
    this.setState({
      searchQuery: this.search.value
    })
  }

  render() {

  return (
    <form>
       <input
         placeholder="Search for.."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.searchQuery}</p>
     </form>
  );
}
}

export default EmpSearch;
