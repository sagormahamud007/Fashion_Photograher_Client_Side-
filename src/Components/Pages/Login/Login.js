import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className=' row container sm:flex-direction-columns py-5'>
                <div className='col-lg-6'>
                    <img className='w-100 md-d-none' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2BYWo71QU8kMO2_wtn6Yt-Gzce7kEylNN2Q&usqp=CAU" alt="" />
                </div>
                <div className='col-lg-6'>
                    <Form>
                        <div className='text-center py-3'>
                            <img className='w-25' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIrxPSJI-uVlJtW6uLDwKFu13Ys9rqfpjo_w&usqp=CAU" alt="" />
                        </div>

                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Control type="email"
                                placeholder="Enter email" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>


                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <p className='my-4'>Already have an account? <Link to='/signup'>Sign Up</Link></p>
                        <div><Button className='w-100 ' variant="primary" type="submit">
                            Login now
                        </Button></div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;