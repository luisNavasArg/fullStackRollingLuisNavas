import {NavLink,Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink to={"/"} className={'nav-item nav-link'}>Inicio</NavLink>
            <NavLink to={"/login"} className={'nav-item nav-link'}>Login</NavLink>
            <NavLink to={"/register"} className={'nav-item nav-link'}>Register</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNav;