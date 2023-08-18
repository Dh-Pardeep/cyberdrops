import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Whats1 from '../assets/img/png/whats1.png'
import Whats2 from '../assets/img/png/whats2.png'
import Whats3 from '../assets/img/png/whats3.png'
import Whats4 from '../assets/img/png/whats4.png'
import WhatUmberla from '../assets/img/png/WhatUmberla.png'
const What = () => {
    return (
        <>
            <section className='position-relative'>
                <div className='WhatShadow position-absolute'></div>
                <img className=' position-absolute WhatUmberla' src={WhatUmberla} alt="WhatUmberla" />
                <div className='mycontainer'>
                    <Row className='justify-content-between py-4 align-items-center'>
                        <Col xs={12} lg={7} xl={6} data-aos="fade-right" data-aos-delay="500">
                            <div className='d-flex flex-sm-column  justify-content-center flex-column'>
                                <div className='d-flex flex-column flex-sm-row'>
                                    <img className='w_75 c_pointer ' src={Whats1} alt="Image" />
                                    <img className='w_75 ms-auto ms-sm-0 c_pointer ' src={Whats2} alt="Image" />
                                </div>
                                <div className='d-flex flex-column flex-sm-row'>
                                    <img className='w_75 whats3 c_pointer ' src={Whats3} alt="Image" />
                                    <img className='w_75 ms-auto ms-sm-0 whats3 c_pointer ' src={Whats4} alt="Image" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} lg={5} xl={6} className='order-first order-lg-1' data-aos="fade-left" data-aos-delay="500">
                            <div className=' ms-lg-0 mb-5'>
                                <h2 className='font_4xl color_white ff_lato fw-bolder mb-0'>What<span className=' color_orange'> we do </span></h2>
                                <p className='color_white mt-4 pt-1 mb-0 mb-md-2 ff_lato font_md fw-normal Algo_para_1'>1000 Cyber Drops will be dropping on Ethereum in March 2022. Each and every Cyber Drop is uniquely hand crafted. This is just the beginning of our journey. Owning a Cyber Drop will unlock monthly airdrops and future governance rights in addition to our revolutionary algorithm. We strive to always bring innovation and keep BUILDing. Cyber Drops is a community driven project and always will be that way. That’s our promise.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default What