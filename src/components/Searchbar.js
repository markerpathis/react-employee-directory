import React from "react";
import Form from "react-bootstrap/Form";

function Searchbar() {
  return (
    <Form className="d-flex justify-content-center pt-4 pb-4">
      <Form.Group className="w-25">
        <Form.Control type="email" placeholder="Search" />
      </Form.Group>
    </Form>
  );
}
export default Searchbar;
