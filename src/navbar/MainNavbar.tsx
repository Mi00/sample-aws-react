import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {SignOut} from "@aws-amplify/ui-react/dist/types/components/Authenticator/Authenticator";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

export interface MainNavbarProps {
    userName?: string
    signOut?: SignOut
}

export const MainNavbar = ({userName, signOut}:MainNavbarProps) => (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/invoicelist">Invoice</Nav.Link>
                    <Nav.Link as={Link} to="/carlist">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: {userName}
                </Navbar.Text>
                <Button variant="outline-success" onClick={signOut}>Logout</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)
