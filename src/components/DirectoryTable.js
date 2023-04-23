import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

function DirectoryTable() {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>image goes here</td>
            <td>Parker Mathis</td>
            <td>425-555-5555</td>
            <td>test@test.com</td>
            <td>01-01-1993</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
export default DirectoryTable;
