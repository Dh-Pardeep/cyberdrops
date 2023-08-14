import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Playbit from '../assets/img/png/Playbit-img.png'
import Capital from '../assets/img/png/24-img.png'
import TradingHive from '../assets/img/png/TradingHive-img.png'
import Focus from '../assets/img/png/Focus-group-img.png'
import Partnershadow from '../assets/img/png/Heroshadow.png'
import MyNav from './MyNav'
const Partners = () => {
    return (
        <>
        <MyNav/>
            <section className='position-relative bg-black' >
                <img className='Partnershadow position-absolute' src={Partnershadow} alt="Partnershadow" />
                <div className='pt-5'>
                    <h2 className='font_4xl color_white ff_lato fw-bolder mb-0 text-center pt-5 mb-0' data-aos="fade-up" >Part<span className=' color_orange'>ners</span></h2>
                </div>
                <div className='partners_bimage  pt-5 h-100'>
                    <div className='mycontainer py-md-5' >
                        <div className='py-sm-5'>
                            <div className='d-grid gap-4 align-items-center py-5 my_xxxl_5'>
                                <div className="grid_1 w-100 mt-5 mt-sm-0" data-aos="flip-left"  data-aos-delay="500">
                                    <div className='my_box2 c_pointer c_pointer d-flex align-items-center justify-content-center  mx-auto'>
                                        <img className='w_200px ' src={Playbit} alt="Playbit" />
                                    </div>
                                    <h2 className='font_md text-center mb-0 mt-4'>Playbit</h2>
                                </div>
                                <div className="grid_2 w-100" data-aos="flip-left"  data-aos-delay="500">
                                    <div className='my_box c_pointer text-center  mx-auto'>
                                        <img src={Capital} alt="Capital" />
                                    </div>
                                    <h2 className='font_md text-center mb-0 mt-4'>24 Capital</h2>
                                </div>
                                <div className="grid_3 w-100" data-aos="flip-left"  data-aos-delay="500">
                                    <div className='my_box c_pointer text-center  mx-auto'>
                                        <img src={TradingHive} alt="TradingHive" />
                                    </div>
                                    <h2 className='font_md text-center mb-0 mt-4'>TradingHive</h2>
                                </div>
                                <div className="grid_4 w-100 mb-5 mb-sm-0" data-aos="flip-left"  data-aos-delay="500">
                                    <div className='my_box c_pointer text-center mx-auto'>
                                        <img src={Focus} alt="Focus" />
                                    </div>
                                    <h2 className='font_md text-center mb-0 mt-4'>Focus Group Equities</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-center font_md color_orange fw-normal ff_lato mb-0 para_2 mt-5 mt-md-4 mt-lg-0 '>For business and collaborations, contact us team@cyberdrops.finance</p>
            </section>
        </>
    )
}

export default Partners