import React, { Component } from "react";
import Tables from "../Tables";
import API from "../../utils/API";

class getEmployees extends Component {
  state = {
    results: [],
    search: "",
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) => {
        console.log(res);

        this.setState({ results: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  /*   handleInputChange = event => {
      const value = event.target.value;
      const name = event.target.name;
      this.setState({
        [name]: value
      });
    };
  
    
    handleFormSubmit = event => {
      event.preventDefault();
      
    };  */

  render() {
    console.log(this.state.results);

    return <Tables results={this.state.results} />;
  }
}

export default getEmployees;
