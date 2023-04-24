import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const styles = {
  header: {
    background: "#A8DADC",
  },
};
function Header() {
  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center" style={{ height: 100, background: "#A8DADC" }}>
      <h2>Employee Directory</h2>
    </Container>
  );
}
export default Header;
