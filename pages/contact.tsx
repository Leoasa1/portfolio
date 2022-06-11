import { Container, Form, Button } from 'react-bootstrap';
import Layout from '@/components/layout/Layout';
import styles from "../styles/contact.module.scss";

export default function contact() {
	return (
		<Layout>
			<div className={`${styles.contactBg} align-middle font-robo`}>
				<Container>
					<div className='row justify-content-center'>
						<div className='col-10 col-sm-7'>
							<Form className=''>
								<div className='text-center'>
									<h1>Contact Form</h1>
								</div>
								<Form.Group
									className='mb-3 mt-4'
									controlId='exampleForm.ControlInput1'
								>
									<Form.Label>Name</Form.Label>
									<Form.Control
										type='email'
										placeholder='John Doe'
									/>
								</Form.Group>
								<Form.Group
									className='mb-3'
									controlId='exampleForm.ControlInput1'
								>
									<Form.Label>Phone</Form.Label>
									<Form.Control
										type='email'
										placeholder='(888) 888-8888'
									/>
								</Form.Group>
								<Form.Group
									className='mb-3'
									controlId='exampleForm.ControlInput1'
								>
									<Form.Label>Email</Form.Label>
									<Form.Control
										type='email'
										placeholder='name@example.com'
									/>
								</Form.Group>
								<Form.Group
									className='mb-3'
									controlId='exampleForm.ControlTextarea1'
								>
									<Form.Label>Comment</Form.Label>
									<Form.Control as='textarea' rows={3} />
								</Form.Group>
								<div className='d-flex justify-content-center mt-4'>
									<Button variant='dark' className='px-4'>
										Submit
									</Button>
								</div>
							</Form>
						</div>
					</div>
				</Container>
			</div>
		</Layout>
	);
}
