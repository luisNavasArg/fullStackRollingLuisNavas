import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            {props.ids.map((id,index)=><Nav.Link key={`nav${index}`} href={`#${id}`}>{id}</Nav.Link>)}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;