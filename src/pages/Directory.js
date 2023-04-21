import React from "react";
import { useState, useEffect } from "react";
import DirectoryContainer from "../components/DirectoryContainer";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import API from "../utils/API";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Directory() {
  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand>Employee Directory</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
export default Directory;
