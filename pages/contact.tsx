import { Container, Form, Button } from 'react-bootstrap';
import Layout from '@/components/layout/Layout';
import styles from "../styles/contact.module.scss";
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast } from 'react-toastify';

const Contract: React.FC = () => {
	const [toSend, setToSend] = useState({
		from_name: '',
		to_name: 'Leo',
		message: '',
		reply_to: '',
	});
	const [formSent, setFormSent] = useState(false);
	const [captchaRef, setCaptchaRef] = useState();

	const onSubmit = (e: any) => {
		e.preventDefault();
		const params = {
			...toSend,
			'g-recaptcha-response': captchaRef,
		};
		emailjs
			.send(
				'service_ieib0vm',
				'template_xhmud9t',
				params,
				'R5hmxWcfF4YSZa03H'
			)
			.then(
				function (response) {
					console.log('SUCCESS!', response.status, response.text);
					toast.success('Message Sent');
					setFormSent(true);
				},
				function (error) {
					toast.error(`Server Error ${error.text}`);
					console.log('FAILED...', error);
				}
			);
	};

	const handleChange = (e: any) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	const onChange = (value: any) => {
		setCaptchaRef(value);
	};

	return (
		<Layout>
			<div className={`${styles.contactBg} align-middle font-robo`}>
				<Container>
					<ToastContainer />
					{formSent ? (
						<div className='text-center'>
							<h1 className=''>Thank you for Contacting!</h1>
							<Link href='/'>
								<a className='btn btn-dark mt-3'>Return Home</a>
							</Link>
						</div>
					) : (
						<div className='row justify-content-center'>
							<div className='col-10 col-sm-7 g-recaptcha'>
								<Form
									onSubmit={onSubmit}
									onChange={handleChange}
								>
									<div className='text-center'>
										<h1>Contact Form</h1>
									</div>
									<Form.Group
										className='mb-3 mt-4'
										controlId='exampleForm.ControlInput1'
									>
										<Form.Label>Name</Form.Label>
										<Form.Control
											required
											type='text'
											id='name'
											placeholder='John Doe'
											name='from_name'
											value={toSend.from_name}
											onChange={handleChange}
										/>
									</Form.Group>
									<Form.Group
										className='mb-3'
										controlId='exampleForm.ControlInput1'
									>
										<Form.Label>Email</Form.Label>
										<Form.Control
											required
											type='email'
											id='email'
											placeholder='name@example.com'
											name='reply_to'
											value={toSend.reply_to}
											onChange={handleChange}
										/>
									</Form.Group>
									<Form.Group
										className='mb-3'
										controlId='exampleForm.ControlTextarea1'
									>
										<Form.Label>Comment</Form.Label>
										<Form.Control
											required
											as='textarea'
											type='text'
											rows={3}
											name='message'
											value={toSend.message}
											onChange={handleChange}
										/>
									</Form.Group>
									{process.env.NEXT_PUBLIC_SITE_KEY ? (
										<Form.Group className='mb-3'>
											<ReCAPTCHA
												sitekey={
													process.env
														.NEXT_PUBLIC_SITE_KEY ||
													''
												}
												onChange={onChange}
											/>
										</Form.Group>
									) : (
										<></>
									)}

									<div className='d-flex justify-content-center mt-4'>
										<Button
											type='submit'
											variant='dark'
											className='px-4'
											value='Submit'
										>
											Submit
										</Button>
									</div>
								</Form>
							</div>
						</div>
					)}
				</Container>
			</div>
		</Layout>
	);
};

export default Contract;
