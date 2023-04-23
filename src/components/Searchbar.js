import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function Searchbar() {
  return (
    <Form className="d-flex justify-content-center pt-3">
      <Form.Group className="w-25">
        <Form.Control type="email" placeholder="Search" />
      </Form.Group>
    </Form>
  );
}
export default Searchbar;
