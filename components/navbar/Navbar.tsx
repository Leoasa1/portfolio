import Link from 'next/link';
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import Style from "./navbar.module.scss";

const Header: React.FC = () => {
	return (
		<Navbar className='mt-2 font-robo' bg='white' expand='lg'>
			<Container>
				<Navbar.Brand href='/' className='fs-4 fw-bold font-pacifico'>
					Leo Asadourian
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse
					id='basic-navbar-nav'
					className='justify-content-end'
				>
					<Nav>
						<NavLink className='text-center'>
							<Link href='/works'>
								<a className='nav-link active mx-4'>Works</a>
							</Link>
						</NavLink>
						<NavLink className='text-center'>
							<Link href='/contact'>
								<a
									className={`btn ${Style.primary} rounded-pill col-12 col-md-auto`}
								>
									Contact
								</a>
							</Link>
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
