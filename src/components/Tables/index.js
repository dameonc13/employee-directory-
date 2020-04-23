import Table from "react-bootstrap/Table";
import React from "react";

function Tables(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Staff Photo</th>
          <th>Ofiice Number</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((result) => (
          <tr key={result.login.uuid}>
            <td>
              <img
                src={result.picture.thumbnail}
                alt={"Employee" + result.name.first + " " + result.name.last}
              />
            </td>
            <td>{result.phone}</td>
            <td>{result.name.first}</td>
            <td>{result.name.last}</td>
            <td>{result.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
export default Tables;
