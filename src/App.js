import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import EmployeeData from './components/EmployeeData';
import EmployeeDetails from './components/SearchResult';


class EmpSearch extends Component {

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
       <Router>
       <div class="container-fluid" style={{padding: "3%"}}>
        <div class="col-sm-6" style={{border: '1px solid #e6e1e1', borderRadius: '10px!important'}}>
            <h2>Employee Directory</h2>
            <p>Search with employee name or part of the name in the box bellow:</p>

            <div class="form-group">
              <label for="usr"><h4>Employee name:</h4></label>
              <input type="text" class="form-control" id="usr" value={filter} onChange={this.handleChange} />

              <h2>Search result</h2>
              <p>Click on the employee name for the details:</p>

              <table class="table table-dark table-hover" style={{overflowX : 'scroll'}}>
                <thead>
                  <tr>
                    <th>Employee name</th>
                    <th>Designation</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                {filteredData.map((employee, index) => {
                 return <tr key={index}>
                    <td><NavLink exact to={employee.route}>{employee.fname + ' ' + employee.lname}</NavLink></td>
                    <td>{employee.title}</td>
                    <td>{employee.email}</td>
                  </tr>
                  })}
           </tbody>
              </table>
            </div>
        </div>

        <div class="col-sm-1">  
        </div>

          <div class="col-sm-5" style={{border: '1px solid #e6e1e1', borderRadius: '10px!important'}}>
             {
               filteredData.map((employee, index) => {
                 console.log(employee, index, employee.route);
                 return <Route exact key={index} path={employee.route} component={() => <EmployeeDetails fname={employee.fname} lname={employee.lname} title={employee.title} State={employee.State} country={employee.country} email={employee.email} DOJ={employee.DOJ} />} />
               })
             }
</div>
      </div>
       </Router>
   );
}
}


export default EmpSearch;
