import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaCamera } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Review.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Review = () => {
    const { user } = useContext(AuthContext)
    const handleUserOrder = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const phoneNumber = form.phoneNumber.value;
        const email = user?.email || 'Unregister';
        const message = form.message.value;
        const address = form.address.value;

        const UserOrders = {
            customer: name,
            email,
            phoneNumber,
            message,
            address
        }


        fetch('https://fashion-photographer-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UserOrders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast('Order placed successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <Form onSubmit={handleUserOrder} className='from-container row mt-5 '>
                <h1 className='fw-bold text-info text-center my-4 mt-5'>HIRE ME !</h1>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicText">
                    <Form.Control type="text" name='name' placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6" controlId="formBasicText">
                    <Form.Control type="number" name='phoneNumber' placeholder="Phone Number" required />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6" controlId="formBasicText">
                    <Form.Control type="text" name='address' placeholder="Address" required />
                </Form.Group>

                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                    <Form.Control type="email" defaultValue={user?.email} name='email' placeholder="Enter email" readOnly />
                </Form.Group>
                <div className='mb-5'>
                    <label className='my-2' for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" name='message' id="exampleFormControlTextarea1" placeholder='Your Message' rows="3" required></textarea>
                </div>

                <div className='text-center'>
                    <Button variant="info" className=' py-2 px-4' type="submit">
                        <FaCamera className='me-3'></FaCamera>Place your order
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Review;