import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var EmployeeData=require("./components/EmployeeData");

class EmpSearch extends React.Component {
  state = {
    filter: "",
    data: EmployeeData,
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

    return (

      <div class="container-fluid">
        <div class="col-sm-6">
      
            <h2>Employee Directory</h2>
            <p>Search with employee name or part of the name in the box bellow:</p>

            <div class="form-group">
              <label for="usr"><h4>Employee name:</h4></label>
              <input type="text" class="form-control" id="usr" value={filter} onChange={this.handleChange} />

              <h2>Search result</h2>
              <p>Click on the employee name for the details:</p>

              <table class="table table-dark table-hover">
                <thead>
                  <tr>
                    <th>Employee name</th>
                    <th>Designation</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                {filteredData.map(item => (
                  <tr>
                    <td>{item.fname} {item.lname}</td>
                    <td>{item.title}</td>
                    <td>{item.email}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>

        </div>
        <div class="col-sm-1">
                  
        </div>
        <div class="col-sm-5">
          <h2>Employee details</h2>
          <p>Here is the details of the selected employee:</p>
        </div>
      </div>

    );
  }
}


export default EmpSearch;
