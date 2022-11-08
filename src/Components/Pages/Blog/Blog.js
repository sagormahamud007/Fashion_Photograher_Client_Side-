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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className='mt-4 border'>
                        <Accordion.Header>What is the difference between javascript and NodeJS?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className='mt-4 border'>
                        <Accordion.Header>How does NodeJS handle multiple requests at the same time?</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blog;