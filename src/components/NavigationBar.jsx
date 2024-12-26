import { Container, Nav, Navbar, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavigationBar() {
    return (
        <Navbar
            expand="lg"
            className="navbar-bg comic-neue-regular navbar-dark"
        >
            <Container>
                <Navbar.Brand as={Link} to="/" className="navbar-text">
					<Image
						src="/logo-snk.png"
						roundedCircle
						width={50}
						height={50}
						alt="Logo"
					/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-5">
                        <Nav.Link as={Link} to="/" className="navbar-text pe-3">
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/about"
                            className="navbar-text pe-3"
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/menu"
                            className="navbar-text pe-3"
                        >
                            Menu
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/gallery"
                            className="navbar-text pe-3"
                        >
                            Gallery
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/order"
                            className="navbar-text pe-3"
                        >
                            Order
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/contact"
                            className="navbar-text pe-3"
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
