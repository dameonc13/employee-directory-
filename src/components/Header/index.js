import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import React from "react";
import Buttons from "../Buttons";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function Header() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter Employee Name"
              aria-label="Enter Employee Name"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Buttons />
            </InputGroup.Append>
          </InputGroup>
        </h1>
        <p>Sort by Name or use the search bar to narrow your results</p>
      </Container>
    </Jumbotron>
  );
}
export default Header;
