import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function Searchbar({ setSearch }) {
  return (
    <Container className="pt-4 pb-4">
      <Form>
        <Form.Group>
          <Form.Control onChange={(event) => setSearch(event.target.value)} type="text" placeholder="Search employee name" />
        </Form.Group>
      </Form>
    </Container>
  );
}
export default Searchbar;
