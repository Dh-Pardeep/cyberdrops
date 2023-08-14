import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { VarunDiscord, VarunMicon, VarunTwitter } from "./Icon";
import Varun from '../assets/img/png/Varun.png'
import Shubh from '../assets/img/png/Shubh.png'
import { Row } from "react-bootstrap";
import TeamBalloon from '../assets/img/png/sliderBalloon.png'
import MyNav from "./MyNav";
export default function TeamSlider() {
    const slider = React.useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        arrows: false,
        pauseOnHover: true,
        autoplay: false,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    infinite: true,
                    dots: true,
                    centerMode: false,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true,
                    centerMode: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true,
                    centerMode: false,
                },
            },

            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    };
    return (
        <>
        <MyNav/>
            <section className="position-relative bg-black">
                <img className="position-absolute TeamBalloon" src={TeamBalloon} alt="TeamBalloon" />
                <div className="mycontainer pt-4 mt-4">
                    <h2 className='font_4xl color_white ff_lato fw-bolder mb-0 text-center pt-5' data-aos="fade-up" data-aos-delay="500">Meet the<span className=' color_orange'>Team</span></h2>
                    <div className="position-relative">
                        <div className="position-absolute sliderleftBtn c_pointer" onClick={() => slider?.current?.slickPrev()}><svg className="SlideBtnSize d-none d-xl-block" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.9999 5.00009C43.7849 5.00009 54.9999 16.2151 54.9999 30.0001C54.9999 43.7851 43.7849 55.0001 29.9999 55.0001C16.2149 55.0001 4.99991 43.7851 4.99991 30.0001C4.99991 16.2151 16.2149 5.00009 29.9999 5.00009ZM29.9999 50.0001C41.0274 50.0001 49.9999 41.0276 49.9999 30.0001C49.9999 18.9726 41.0274 10.0001 29.9999 10.0001C18.9724 10.0001 9.99991 18.9726 9.99991 30.0001C9.99991 41.0276 18.9724 50.0001 29.9999 50.0001Z" fill="white" />
                            <path d="M36.7676 19.2674L26.0351 29.9999L36.7676 40.7324L33.2326 44.2674L18.9651 29.9999L33.2326 15.7324L36.7676 19.2674Z" fill="white" />
                        </svg>
                        </div>
                        <div className="position-absolute sliderrightBtn c_pointer" onClick={() => slider?.current?.slickNext()}><svg className="SlideBtnSize d-none d-xl-block" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.0001 5.00009C16.2151 5.00009 5.00012 16.2151 5.00012 30.0001C5.00012 43.7851 16.2151 55.0001 30.0001 55.0001C43.7851 55.0001 55.0001 43.7851 55.0001 30.0001C55.0001 16.2151 43.7851 5.00009 30.0001 5.00009ZM30.0001 50.0001C18.9726 50.0001 10.0001 41.0276 10.0001 30.0001C10.0001 18.9726 18.9726 10.0001 30.0001 10.0001C41.0276 10.0001 50.0001 18.9726 50.0001 30.0001C50.0001 41.0276 41.0276 50.0001 30.0001 50.0001Z" fill="white" />
                            <path d="M23.2324 19.2674L33.9649 29.9999L23.2324 40.7324L26.7674 44.2674L41.0349 29.9999L26.7674 15.7324L23.2324 19.2674Z" fill="white" />
                        </svg>
                        </div>
                        <Slider ref={slider} {...settings} className="py-5">
                            <div>
                                <div className="d-flex flex-column flex-md-row align-items-center full_card c_pointer  mx-2 mx-xxl-4">
                                    <div className="VarunCard w-50 mt-4 mt-md-0 overflow-hidden">
                                        <img className="Varun w-100 transform_scale" src={Varun} alt="Varun" />
                                    </div>
                                    <div className="d-flex flex-column  justify-content-center align-items-center w-50">
                                        <h2 className="font_xl fw-bold ff_lato color_black mt-4 mt-md-0">Varun Muthu</h2>
                                        <h3 className="font_md fw-medium ff_lato color_black mt-2 text-center">Marketing Director</h3>
                                        <a href="https://www.linkedin.com/in/varunmuthu1" className="VarunLinkdinLink text-center font_xs color_black fw-normal my-4 pt-1 pb-3">https://www.linkedin.com/<span className="d-block">in/varunmuthu1</span></a>
                                        <div className="d-flex mb-4 mb-md-0">
                                            <VarunDiscord />
                                            <div className="mx-2">
                                                <VarunTwitter />
                                            </div>
                                            <VarunMicon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex flex-column flex-md-row align-items-center full_card c_pointer  mx-2 mx-xxl-4">
                                    <div className="VarunCard w-50 mt-4 mt-md-0 overflow-hidden">
                                        <img className="Varun w-100 transform_scale" src={Shubh} alt="Shubh" />
                                    </div>
                                    <div className="d-flex flex-column  justify-content-center align-items-center w_52 w_50">
                                        <h2 className="font_xl fw-bold ff_lato color_black mt-4 mt-md-0">Shubh Sharma</h2>
                                        <h3 className="font_md fw-medium ff_lato color_black mt-2 text-center">Operations Director</h3>
                                        <a href="https://www.linkedin.com/in/shubhsharma01/" className="VarunLinkdinLink text-center font_xs color_black fw-normal my-4 pt-1 pb-3">https://www.linkedin.com/<span className="d-block">in/shubhsharma01/</span></a>
                                        <div className="d-flex mb-4 mb-md-0">
                                            <VarunDiscord />
                                            <div className="mx-2">
                                                <VarunTwitter />
                                            </div>
                                            <VarunMicon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex flex-column flex-md-row align-items-center full_card c_pointer  mx-2 mx-xxl-4">
                                    <div className="VarunCard w-50 mt-4 mt-md-0 overflow-hidden"  >
                                        <img className="Varun w-100 transform_scale" src={Varun} alt="Varun" />
                                    </div>
                                    <div className="d-flex flex-column  justify-content-center align-items-center w-50">
                                        <h2 className="font_xl fw-bold ff_lato color_black mt-4 mt-md-0">Varun Muthu</h2>
                                        <h3 className="font_md fw-medium ff_lato color_black mt-2 text-center">Marketing Director</h3>
                                        <a href="https://www.linkedin.com/in/varunmuthu1" className="VarunLinkdinLink text-center font_xs color_black fw-normal my-4 pt-1 pb-3">https://www.linkedin.com/<span className="d-block">in/varunmuthu1</span></a>
                                        <div className="d-flex mb-4 mb-md-0">
                                            <VarunDiscord />
                                            <div className="mx-2">
                                                <VarunTwitter />
                                            </div>
                                            <VarunMicon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex flex-column flex-md-row align-items-center full_card c_pointer  mx-2 mx-xxl-4">
                                    <div className="VarunCard w-50 mt-4 mt-md-0 overflow-hidden">
                                        <img className="Varun w-100 transform_scale" src={Shubh} alt="Shubh" />
                                    </div>
                                    <div className="d-flex flex-column  justify-content-center align-items-center w_52 w_50">
                                        <h2 className="font_xl fw-bold ff_lato color_black mt-4 mt-md-0">Shubh Sharma</h2>
                                        <h3 className="font_md fw-medium ff_lato color_black mt-2 text-center">Operations Director</h3>
                                        <a href="https://www.linkedin.com/in/shubhsharma01/" className="VarunLinkdinLink text-center font_xs color_black fw-normal my-4 pt-1 pb-3">https://www.linkedin.com/<span className="d-block">in/shubhsharma01/</span></a>
                                        <div className="d-flex mb-4 mb-md-0">
                                            <VarunDiscord />
                                            <div className="mx-2">
                                                <VarunTwitter />
                                            </div>
                                            <VarunMicon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex flex-column flex-md-row align-items-center full_card c_pointer  mx-2 mx-xxl-4">
                                    <div className="VarunCard w-50 mt-4 mt-md-0 overflow-hidden">
                                        <img className="Varun w-100 transform_scale" src={Varun} alt="Varun" />
                                    </div>
                                    <div className="d-flex flex-column  justify-content-center align-items-center w-50">
                                        <h2 className="font_xl fw-bold ff_lato color_black mt-4 mt-md-0">Varun Muthu</h2>
                                        <h3 className="font_md fw-medium ff_lato color_black mt-2 text-center">Marketing Director</h3>
                                        <a href="https://www.linkedin.com/in/varunmuthu1" className="VarunLinkdinLink text-center font_xs color_black fw-normal my-4 pt-1 pb-3">https://www.linkedin.com/<span className="d-block">in/varunmuthu1</span></a>
                                        <div className="d-flex mb-4 mb-md-0">
                                            <VarunDiscord />
                                            <div className="mx-2">
                                                <VarunTwitter />
                                            </div>
                                            <VarunMicon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex flex-column flex-md-row align-items-center full_card c_pointer  mx-2 mx-xxl-4">
                                    <div className="VarunCard w-50 mt-4 mt-md-0 overflow-hidden">
                                        <img className="Varun w-100 transform_scale" src={Shubh} alt="Shubh" />
                                    </div>
                                    <div className="d-flex flex-column  justify-content-center align-items-center w_52 w_50">
                                        <h2 className="font_xl fw-bold ff_lato color_black mt-4 mt-md-0">Shubh Sharma</h2>
                                        <h3 className="font_md fw-medium ff_lato color_black mt-2 text-center">Operations Director</h3>
                                        <a href="https://www.linkedin.com/in/shubhsharma01/" className="VarunLinkdinLink text-center font_xs color_black fw-normal my-4 pt-1 pb-3">https://www.linkedin.com/<span className="d-block">in/shubhsharma01/</span></a>
                                        <div className="d-flex mb-4 mb-md-0">
                                            <VarunDiscord />
                                            <div className="mx-2">
                                                <VarunTwitter />
                                            </div>
                                            <VarunMicon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider >
                    </div>
                </div>
            </section>
        </>
    );
}