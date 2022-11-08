import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css'
const Footer = () => {
    return (
        <div className='bg-dark overflow-hidden mt-5'>
            <div className="row px-3">
                <div className="col-lg-3 col-md-3">
                    <h1 className='text-light mt-4'>Olbia</h1>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mt-2">
                    <Link className='text-light text-decoration-none'>Weddings</Link>
                    <br />
                    <Link className='text-light text-decoration-none'>Engagements</Link>
                    <br />
                    <Link className='text-light text-decoration-none'>Couples</Link>
                    <br />
                    <Link className='text-light text-decoration-none'>All works</Link>

                </div>
                <div className="col-lg-3 mt-2 col-sm-6 col-md-2">
                    <Link className='text-light text-decoration-none'>About</Link>
                    <br />
                    <Link className='text-light text-decoration-none'>Pricing</Link>
                    <br />
                    <Link className='text-light text-decoration-none'>Workshops
                    </Link>
                    <br />
                    <Link className='text-light text-decoration-none'>Contact</Link>
                    <br />
                </div>
                <div className="col-lg-3 mt-5 col-sm-6 col-md-3">
                    <FaFacebook className='text-light h-25 me-3'></FaFacebook>
                    <FaInstagram className='text-light h-25  me-3'></FaInstagram>
                    <FaTwitter className='text-light h-25 '></FaTwitter>
                </div>
            </div>
            <footer>
                <p className='bg py-3 text-center text-light mt-4'>Copyright @ Md shagor mahamud-2023</p>
            </footer>
        </div>
    );
};

export default Footer;