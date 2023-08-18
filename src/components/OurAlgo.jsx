import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Algo_1 from '../assets/img/png/Algo_1.png'
import Algo_2 from '../assets/img/png/Algo_2.png'
import Algo_3 from '../assets/img/png/algo_3.png'
const OurAlgo = () => {
    return (
        <>
            <section className='position-relative'>
            <div className='OurAlgoShadow position-absolute'></div>
                <div className='mycontainer  py-5'>
                    <Row className='justify-content-between py-4 align-items-center'>
                        <Col xs={12} lg={5} xl={6} data-aos="fade-right"  data-aos-delay="500">
                            <div className=' ms-lg-0 '>
                                <h2 className='font_4xl color_white ff_lato fw-bolder mb-0'>Our <span className=' color_orange'>Algo</span></h2>
                                <p className='color_white mt-4 pt-1 mb-0 mb-md-2 ff_lato font_md fw-normal Algo_para_1'>We have perfected our algorithm, which prioritizes a low risk and consistent profit stream without the need for daily micromanagement. While most trading algorithms can’t stand up against a volatile or risky market, our algorithm thrives in those conditions. Early-stage testers have seen a consistent flow of income with minimal ups and downs. Our algorithm has been in the works for YEARS. This has given us the time to rigorously backtest and release any needed hotfixes. As of early March 2022, we have close to a quarter of a million under direct management!</p>
                            </div>
                        </Col>
                        <Col xs={12} lg={7} xl={6} data-aos="fade-left"  data-aos-delay="500">
                            <div className='d-flex justify-content-center justify-content-sm-center  flex-column flex-sm-row align-items-sm-center justify-content-xl-end pt-md-5'>
                                <div className='d-flex align-items-center flex-md-row flex-lg-column flex-column justify-content-center'>
                                    <div className='algo_1 c_pointer mt-5 mt-md-0'>
                                        <img className='algo_br w-100 ' src={Algo_1} alt="Image" />
                                    </div>
                                    <div className='algo_1 c_pointer my-4 ms-md-4 ms-lg-0'>
                                        <img className='algo_br w-100 ' src={Algo_2} alt="Image" />
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center ms-sm-4'>
                                    <div className='algo_1 c_pointer algo_3'>
                                        <img className='algo3_br w-100 ' src={Algo_3} alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default OurAlgo