import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css'
const Blog = () => {
    return (
        <div className='container mt-5 blog-img'>
            <div>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Difference between SQL and NoSQL</Accordion.Header>
                        <Accordion.Body>
                            <span className='fw-bold'>SQL</span> :
                            * SQL stands for Structured Query Language
                            <br />
                            * SQL lets you access and manipulate databases
                            * SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the International
                            <br /> Organization for Standardization (ISO) in 1987 <br />
                            SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them).
                            <br />
                            <br />
                            <span className='fw-bold'>NOSQL</span> : NoSQL is a class of DBMs that are non-relational and generally do not use SQL.Is SQL or NoSQL better?
                            NoSQL doesn't support relations between data types. Running queries in NoSQL is doable, but much slower. You have a high transaction application
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='mt-4 border'>
                        <Accordion.Header>What is JWT, and how does it work?</Accordion.Header>
                        <Accordion.Body>
                            <span className='fw-bold'>JWT</span> : JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className='mt-4 border'>
                        <Accordion.Header>What is the difference between javascript and NodeJS?</Accordion.Header>
                        <Accordion.Body>
                            <span className='fw-bold'>Node Js</span> : JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language
                            <br />
                            NodeJS is a Javascript runtime environment. 2. Javascript can only be run in the browsers
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className='mt-4 border'>
                        <Accordion.Header>How does NodeJS handle multiple requests at the same time?</Accordion.Header>
                        <Accordion.Body>
                            <span className='fw-bold'>Node Js Multiple Request</span> :
                            How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blog;