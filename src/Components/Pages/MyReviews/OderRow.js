import React from 'react';
import Table from 'react-bootstrap/Table';

const OderRow = ({ order, handleDelete }) => {
    const { serviceName, price, phoneNumber, customer, _id } = order;


    return (
        <div className='my-5 container bg-info'>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Service</th>
                        <th>Phone</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>{customer}</td>
                        <td >{serviceName}</td>
                        <td>{phoneNumber}</td>
                        <td> ${price}</td>
                        <td> <button onClick={() => handleDelete(_id)}>Delete</button> <button className='ms-2'>Edit </button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default OderRow;