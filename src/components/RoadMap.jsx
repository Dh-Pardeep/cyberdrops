import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Balloon1 from '../assets/img/svg/RoadMap1.svg'
import Balloon2 from '../assets/img/svg/RoadMap2.svg'
import Balloon3 from '../assets/img/svg/RoadMap3.svg'
import Balloon4 from '../assets/img/svg/RoadMap4.svg'
import Balloon5 from '../assets/img/svg/Roadmap5.svg'
import Balloon6 from '../assets/img/svg/RoadMap6.svg'
import Balloon7 from '../assets/img/svg/RoadMap7.svg'
import Balloon8 from '../assets/img/svg/RoadMap8.svg'
const RoadMap = () => {
    return (
        <>
            <section>
                <h2 className='font_4xl color_white ff_lato fw-bolder mb-0 text-center py-5'>Road<span className=' color_orange'>Map</span></h2>
                <div className='RoadmapBg mb-5'>
                    <div className="mycontainer py-5">
                        <Row className="CenterLine  position-relative ">
                            <Col md={6}>
                            </Col>
                            <Col md={6}>
                                <div className="d-flex  position-relative">
                                    <img
                                        className="BallonOne c_pointer transform_scale z-3 c_pointer transform_scale"
                                        src={Balloon1}
                                        alt="Balloon1"
                                    />
                                    <div className="right_line ps-5 ms-5 position-relative ">
                                        <h2 className='font_xl fw-semibold ff_lato color_white mb-2 pb-1 ps-sm-5 ms-sm-5'>March 2022</h2>
                                        <p className='font_xs fw-normal ff_lato color_white mb-0 ps-sm-5 ms-sm-5'>1000 Drops Launch on Ethereum</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} >
                                <div className="d-flex justify-content-md-end position-relative mt-5 pt-5">
                                    <img
                                        className="Ballontwo c_pointer transform_scale c_pointer transform_scale"
                                        src={Balloon2}
                                        alt="Balloon2"
                                    />
                                    <div className="left_line text-md-end position-relative ps-5 ps-md-0 ms-md-0 ms-5 pe-md-5 me-md-5">
                                        <h2 className='font_xl fw-semibold ff_lato color_white mb-2 pb-1 pe-md-5 me-md-5  ps-sm-5 ps-md-0 ms-md-0 ms-sm-5'>March 2022</h2>
                                        <p className='font_xs fw-normal ff_lato color_white mb-0 ps-sm-5 pe-md-5 me-md-5 ps-md-0 ms-md-0 ms-sm-5'>1000 Drops Launch on Ethereum</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                            </Col>
                            <Col md={6}>
                            </Col>
                            <Col md={6}>
                                <div className="d-flex  position-relative mt-5 pt-5">
                                    <img
                                        className="BallonOne c_pointer transform_scale z-3 "
                                        src={Balloon3}
                                        alt="Balloon3"
                                    />
                                    <div className="right_line ps-5 ms-5 position-relative ">
                                        <h2 className='font_xl fw-semibold ff_lato color_white mb-2 pb-1 ps-sm-5 ms-sm-5'>March 2022</h2>
                                        <p className='font_xs fw-normal ff_lato color_white mb-0 ps-sm-5 ms-sm-5'>Creation of Treasury</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} >
                                <div className="d-flex justify-content-md-end position-relative mt-5 pt-5">
                                    <img
                                        className="Ballontwo c_pointer transform_scale "
                                        src={Balloon4}
                                        alt="Balloon4"
                                    />
                                    <div className="left_line  text-md-end position-relative ps-5 ms-5  ps-md-0 ms-md-0 pe-md-5 me-md-5">
                                        <h2 className='font_xl fw-semibold ff_lato color_white mb-2 pb-1  ps-sm-5 ms-sm-5  ps-md-0 ms-md-0 pe-md-5 me-md-5'>April 2022</h2>
                                        <p className='font_xs fw-normal ff_lato color_white mb-0 ps-sm-5 ms-sm-5  ps-md-0 ms-md-0 pe-md-5 me-md-5'>Our First Airdrop</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                            </Col>
                            <Col md={6}>
                            </Col>
                            <Col md={6}>
                                <div className="d-flex  position-relative mt-5 pt-5">
                                    <img
                                        className="BallonOne c_pointer transform_scale z-3 "
                                        src={Balloon5}
                                        alt="Balloon5"
                                    />
                                    <div className="right_line ps-5 ms-5  position-relative ">
                                        <h2 className='font_xl fw-semibold ff_lato color_white mb-2 pb-1 ps-sm-5 ms-sm-5 '>June 2022</h2>
                                        <p className='font_xs fw-normal ff_lato color_white mb-0 ps-sm-5 ms-sm-5 '>Major Collabs</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} >
                                <div className="d-flex justify-content-md-end position-relative mt-5 pt-5">
                                    <img
                                        className="Ballontwo c_pointer transform_scale "
                                        src={Balloon6}
                                        alt="Balloon6"
                                    />
                                    <div className="left_line text-md-end position-relative ps-5 ms-5  ps-md-0 ms-md-0 pe-md-5 me-md-5">
                                        <h2 className='font_xl fw-semibold ff_lato color_white mb-2 pb-1 ps-sm-5 ms-sm-5 ps-md-0 ms-md-0 pe-md-5 me-md-5'>Sometime in Q3</h2>
                                        <p className='font_xs fw-normal ff_lato color_white mb-0 ps-sm-5 ms-sm-5 ps-md-0 ms-md-0 pe-md-5 me-md-5'>Cyber Celebs come on Ethereum</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                            </Col>
                            <Col md={6}>
                            </Col>
                            <Col md={6}>
                                <div className="d-flex  position-relative mt-5 pt-5">
                                    <img
                                        className="BallonOne c_pointer transform_scale z-3 "
                                        src={Balloon7}
                                        alt="Balloon7"
                                    />
                                    <div className="right_line ps-5 ms-5  position-relative ">
                                        <h2 className='font_xl fw-semibold ff_lato color_white mb-2 pb-1 ps-sm-5 ms-sm-5 '>Sometime in Q3</h2>
                                        <p className='font_xs fw-normal ff_lato color_white mb-0 ps-sm-5 ms-sm-5 '>Streetwear + Merch</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} >
                                <div className="d-flex justify-content-md-end position-relative mt-5 pt-5">
                                    <img
                                        className="Ballontwo c_pointer transform_scale "
                                        src={Balloon8}
                                        alt="Balloon8"
                                    />
                                    <div className="left_line text-md-end position-relative ps-5 ms-5 ps-md-0 ms-md-0 pe-md-5 me-md-5">
                                        <h2 className='font_xl fw-semibold ff_lato color_white mb-2 pb-1 ps-sm-5 ms-sm-5 ps-md-0 ms-md-0 pe-md-5 me-md-5'>Sometime in Q4</h2>
                                        <p className='font_xs fw-normal ff_lato color_white mb-0 ps-sm-5 ms-sm-5 ps-md-0 ms-md-0 pe-md-5 me-md-5'>Enhanced Partnerships</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RoadMap