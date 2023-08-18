import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import OurBack from '../assets/img/WebP/Our-Mission-back-img.webp'
import OurCenter from '../assets/img/png/Our-Mission-Center-img.png'
import OurUpper from '../assets/img/WebP/Our-Mission-upper-img.webp'
const OurMission = () => {
    return (
        <>
            <section>
                <div className='mycontainer'>
                    <Row className='justify-content-between align-items-center py-md-5'>
                        <Col md={6} lg={5} data-aos="fade-right" data-aos-delay="300">
                            <div className='py-5 mt-5 pt-md-0 mt-md-0'>
                                <div className='position-relative w_95 text-center mx-auto' >
                                    <img className=' OurBack w_95 c_pointer ' src={OurBack} alt="OurBack" />
                                    <div className='position-absolute w-100 OurCenter c_pointer'>
                                        <div className='position-relative w-100 text-center'>
                                            <img className='w_95 c_pointer' src={OurCenter} alt="Ourcenter" />
                                            <img className='w-75 position-absolute OurUpper' src={OurUpper} alt="OurUpper" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col md={6} lg={5} className='order-first order-md-0' data-aos="fade-left" data-aos-delay="300">
                            <div className='ms-md-5 ms-lg-0'>
                                <h2 className='font_4xl color_white ff_lato fw-bolder mb-0'>Our <span className=' color_orange'>Mission</span></h2>
                                <p className='color_white mt-4 pt-1 mb-0 mb-md-2 ff_lato font_lg fw-normal'>We understand that one of the biggest concerns for early-stage investors is that it can quickly become stressful, overwhelming, and especially extremely time consuming. It isn’t easy to balance a full time job, family, and an active investment portfolio, especially when just starting out.</p>
                                <Link className='common_btn mt-5 d-inline-block ff_lato font_lg color_white fw-semibold' data-aos="flip-left">Read More</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default OurMission