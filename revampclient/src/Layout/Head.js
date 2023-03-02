import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LOGO from "../LogoImages/logo.png";
import { FaUser , FaShoppingBag} from "react-icons/fa";
import {useDispatch , useSelector} from "react-redux"


const AquaNavScrollExample = () => {
  let dispatch = useDispatch()
  const {cart} = useSelector((state)=>({...state}))
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={LOGO} height="50" alt="Aquakart Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Shop</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
           
          </Form>
          <Button className="m-1" variant="outline-info">
              <FaShoppingBag size={25} />
              
            </Button>
          <Button className="m-1" variant="outline-info">
              <FaUser size={25} />
            </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AquaNavScrollExample;
