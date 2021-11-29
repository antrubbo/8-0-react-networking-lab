import React, { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends Component {
  // constructor(){
  //   super()
    
  // }

  // fetchEmployees = () => {
  //   fetch("https://vet-api-8-1.herokuapp.com/api/employees")
  //     .then(r => r.json())
  //     .then(data => {
  //       this.setState({
  //         employees: [...this.state.employees, data]
  //       })
  //     })
  // }

  // componentDidMount(){
  //   this.fetchEmployees()
  // }

  render(){
    const { employees } = this.props

    const allEmployees = employees.map((e, i) => {
      return <Employee key={e.firstName + i} employee={e}/>
    })

    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {allEmployees}
        </section>
      </main>
    );
  }
};

export default EmployeeList;
