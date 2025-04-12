import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function TopMenu() {
  return (
    <>
        {/* <Navbar bg="primary" fixed="top" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">Garage Sale</Navbar.Brand>
        </Container>
      </Navbar> */}
      <br/>
      <nav className="navbar bg-primary border-bottom border-body fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Garage Sale</a>
        </div>
      </nav>
    </>
  );
} 