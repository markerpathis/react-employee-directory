import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

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
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>
                  <img src={user.picture.thumbnail} />
                </td>
                <td>
                  {user.name.first} {user.name.last}
                </td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.dob.date}</td>
              </tr>
            ))}
          </tbody>
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
