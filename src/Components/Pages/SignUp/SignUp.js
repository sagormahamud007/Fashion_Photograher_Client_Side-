import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className=' row container sm:flex-direction-columns py-5'>
            <div className='col-lg-6'>
                <img className='w-100 md-d-none' src="https://img.freepik.com/free-vector/profile-picconcept-illustration_114360-6189.jpg?w=2000" alt="" />
            </div>
            <div className='col-lg-6 mt-3'>
                <Form>
                    <div className='text-center'>
                        <h1>Sign Up</h1>
                        <p>Already a Member <Link to='/login'>Login</Link></p>
                    </div>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control className='border-0  border-bottom' type="text"
                            name='name' placeholder="Your Name" required />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='border-0  border-bottom' type="email"
                            name='email' placeholder="Enter email" required />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control className='border-0  border-bottom' type="text"
                            name='imgUrl' placeholder="Image url" required />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='border-0  border-bottom' type="password"
                            name='password' placeholder="Password" required />
                    </Form.Group>
                    <div><Button className='w-100 ' variant="primary" type="submit">
                        Submit
                    </Button></div>
                </Form>
                <div className='text-center my-4'>
                    <div className=''>
                        <p className='before-after'>Or sign up with</p>
                    </div>
                    <Button className='w-100 ' variant="primary" type="submit">
                        <span className='text-light'><FaGoogle></FaGoogle></span> Google SignUp
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;