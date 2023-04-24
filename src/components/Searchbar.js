import React from "react";
import Form from "react-bootstrap/Form";

function Searchbar({ setSearch }) {
  return (
    <Form className="d-flex justify-content-center pt-4 pb-4">
      <Form.Group className="w-25">
        <Form.Control onChange={(event) => setSearch(event.target.value)} type="text" placeholder="Search" />
      </Form.Group>
    </Form>
  );
}
export default Searchbar;
