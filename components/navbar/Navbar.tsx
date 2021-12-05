import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Style from './navbar.module.css';

export default function Header() {
    return (
        <Navbar className="mt-1 font-robo" bg="white" expand="lg">
            <Container>
                <Navbar.Brand href="/" className="fs-4 fw-bold font-pacifico">
                    Leo Asadourian
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-end"
                >
                    <Nav>
                        {/* <Link href="/blogs">
                          <a className="nav-item nav-link active mr-2">Blogs</a>
                        </Link> */}
                        <Link href="/works">
                            <a className="nav-item nav-link active mx-4">
                                Works
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a
                                className={`btn + ${Style.primary} + rounded-pill + mx-2`}
                            >
                                Contact
                            </a>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
