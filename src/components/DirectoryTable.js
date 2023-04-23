import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import moment from "moment";

function DirectoryTable(props) {
  const [users, setUsers] = useState([]);

  const apiUrl = "https://randomuser.me/api/?results=200&nat=u";

  async function getRandomUsers() {
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    console.log(responseData);
    setUsers(responseData.results);
  }

  useEffect(() => {
    getRandomUsers();
  }, []);

  const populateUserData = () => {
    return users.map((user, index) => {
      const dobFormatted = moment.utc(user.dob.date).format("MM-DD-YYYY");
      return (
        <tr key={index}>
          <td>
            <img src={user.picture.thumbnail} />
          </td>
          <td>
            {user.name.first} {user.name.last}
          </td>
          <td>{user.phone}</td>
          <td>{user.email}</td>
          <td>{dobFormatted}</td>
        </tr>
      );
    });
  };

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
        {users ? (
          <tbody>{populateUserData()}</tbody>
        ) : (
          <tbody>
            <tr>
              <td>loading</td>
              <td>loading</td>
              <td>loading</td>
              <td>loading</td>
              <td>loading</td>
            </tr>
          </tbody>
        )}
      </Table>
    </Container>
  );
}

export default DirectoryTable;
