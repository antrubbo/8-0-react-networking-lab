import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

class Employee extends Component {
  constructor(props){
    super(props)
    this.state = {
      pets: []
    }
  }

  handleShowPets = (id) => {
    fetch(`https://vet-api-8-1.herokuapp.com/api/pets?employeeId=${id}`)
      .then(r => r.json())
      .then(data => {
        this.setState({
          pets: [...data]
        })
      })
  }

  render(){
    const { id, firstName, lastName, prefix, postfix, title } = this.props.employee
    const fullName = prefix + " " + firstName + " " + lastName

    // console.log(this.state.pets)
    return (
      <article className="employee"> 
        <h3>{postfix.length ? fullName + `, ${postfix}` : fullName}</h3>
        <h4>{title}</h4>
        <button onClick={() => this.handleShowPets(id)}>Show Pets</button>
        <PetList pets={this.state.pets}/>
      </article>
    );
  }
};

export default Employee;
