import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CyberDropsMain from '../assets/img/WebP/CyberBrops-Main-img.webp'
import MyNav from '../components/MyNav'
const Hero = () => {
    return (
        <>
            <section className='position-relative bg-black' >
                <div className='NavShadow position-absolute'></div>
                <div className='Heroshadow position-absolute'></div>
                <div className='Heroshadow2 position-absolute'></div>
                <MyNav />
                <div className='mycontainer pt-5 pb-lg-4 mt-5'>
                    <Row className='justify-content-between py-5 my-md-4 my-lg-5 align-items-center '>
                        <Col md={5} data-aos="fade-right" data-aos-delay="2200" data-aos-duration="800">
                            <div>
                                <h2 className='font_5xl color_white  ff_lato fw-bolder mb-0 Welcome'>Welcome to <span className=' color_orange'>Cyber Drops</span></h2>
                                <p className='color_white mt-4 pt-1 mb-2 ff_lato font_md fw-normal'>Viverra felis, dui adipiscing ipsum pharetra donec. Pretium, tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit nec curabitur purus. Ullamcorper mattis risus suspendisse pretium tristique.</p>
                                <Link className='common_btn mt-4 mt-md-5 d-inline-block ff_lato font_lg color_white fw-semibold' data-aos="flip-left" data-aos-delay="2200" data-aos-duration="800" >Explore Now</Link>
                            </div>
                        </Col>
                        <Col md={6} lg={5} data-aos="fade-left" data-aos-delay="2200" data-aos-duration="800">
                            <div className='mt-4 mt-md-0 text-center'>
                                <img className='pe-lg-5 CyberDropsMain ' src={CyberDropsMain} alt="CyberDropsMain" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Hero