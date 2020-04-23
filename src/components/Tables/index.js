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
    </Table>
  );
}
export default Tables;
