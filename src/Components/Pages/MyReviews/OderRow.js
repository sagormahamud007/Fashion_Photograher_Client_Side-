import React from 'react';
import Table from 'react-bootstrap/Table';

const OderRow = ({ order, handleDelete }) => {
    console.log(order);
    const { message, phoneNumber, address, customer, _id, } = order;

    return (
        <div className='my-5 container bg-info'>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>message</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>{customer}</td>
                        <td >{address}</td>
                        <td>{phoneNumber}</td>
                        <td> {message}</td>
                        <td> <button onClick={() => handleDelete(_id)}>Delete</button> <button className='ms-2'>Edit </button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default OderRow;