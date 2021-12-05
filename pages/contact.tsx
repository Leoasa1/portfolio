import { Container, Form, Button } from 'react-bootstrap';
import Layout from '@/components/layout/Layout';
import styles from '../styles/contact.module.css';

export default function contact() {
    return (
        <Layout>
            <div className={`${styles.contactBg} align-middle`}>
                <Container>
                    <div className="d-flex justify-content-center">
                        <div className="col col-6 col-md-5">
                            <Form className="mt-5 p-5">
                                <div className="text-center">
                                    <h1>Contact Form</h1>
                                </div>
                                <Form.Group
                                    className="mb-3 mt-4"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="John Doe"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="(888)888-8888"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="name@example.com"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <div className="d-flex justify-content-center mt-4">
                                    <Button variant="dark" className="px-4">
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
