import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const { logInUser } = useContext(AuthContext)
    let location = useLocation()
    let navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';


    const handleAddUser = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        logInUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset('')
                navigate(from, { replace: true });
                toast('login success')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast(errorMessage)
            });
    }

    return (
        <div>
            <div className=' row container sm:flex-direction-columns py-5'>
                <div className='col-lg-6'>
                    <img className='w-100 md-d-none' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2BYWo71QU8kMO2_wtn6Yt-Gzce7kEylNN2Q&usqp=CAU" alt="" />
                </div>
                <div className='col-lg-6'>
                    <Form onSubmit={handleAddUser}>
                        <div className='text-center py-3'>
                            <img className='w-25' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIrxPSJI-uVlJtW6uLDwKFu13Ys9rqfpjo_w&usqp=CAU" alt="" />
                        </div>

                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Control type="email"
                                name='email'
                                placeholder="Enter email" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>


                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control type="password"
                                name='password' placeholder="Password" />
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