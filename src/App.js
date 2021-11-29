import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

class App extends Component {
  constructor(){
    super()
    this.state = {
      employees: []
    }
  }

  componentDidMount(){
    this.fetchEmployees()
  }

  fetchEmployees = () => {
    fetch("https://vet-api-8-1.herokuapp.com/api/employees")
      .then(r => r.json())
      .then(data => {
        this.setState({
          employees: [...this.state.employees, ...data]
        })
      })
  }

  render(){
    return (
      <>
        <NavBar />
        <EmployeeList employees={this.state.employees}/>
      </>
    );
  }
};

export default App;
