import React from 'react'
import { Col, Row } from 'react-bootstrap'

const HowWorksCard = () => {
    return (
        <>
            <section>
                <div className="mycontainer">
                    <h2 className='font_4xl color_white ff_lato fw-bolder mb-0 text-center pt-5'>How it <span className=' color_orange'>works</span></h2>
                    <div className='d-grid gap-3 my-5 py-3'>
                        <div className='how_card_1 ' >
                            <div className="my_card  mx-auto me-sm-0">
                                <h2 className='color_white text-center h2_card mb-0 d-flex align-items-center justify-content-center font_2xl mx-auto ff_lato mt-4'>01</h2>
                                <h3 className='color_white text-center font_lg fw-bold ff_lato mb-0 pt-4'>Mint NFT</h3>
                                <p className='color_white text-center font_xs fw-normal ff_lato whatPara mx-auto'>You must own our NFT to connect to direct management or participate in governance
                                </p>
                            </div>
                        </div>
                        <div className='how_card_2'>
                            <div className="my_card mx-auto ms-sm-0 mx-lg-auto">
                                <h2 className='color_white text-center h2_card mb-0 d-flex align-items-center justify-content-center font_2xl mx-auto ff_lato mt-4  '>02</h2>
                                <h3 className='color_white text-center font_lg fw-bold ff_lato mb-0 pt-4'>Verify NFT Ownership</h3>
                                <p className='color_white text-center font_xs fw-normal ff_lato whatPara mx-auto'>Only Cyber Drops that are have verified are eligible to be connected under direct management

                                </p>
                            </div>
                        </div>
                        <div className='how_card_3'>
                            <div className="my_card mx-auto me-sm-0 ms-lg-0">
                                <h2 className='color_white text-center h2_card mb-0 d-flex align-items-center justify-content-center font_2xl mx-auto ff_lato mt-4  '>03</h2>
                                <h3 className='color_white text-center font_lg fw-bold ff_lato mb-0 pt-4'>Link API to your account</h3>
                                <p className='color_white text-center font_xs fw-normal ff_lato whatPara mx-auto'>Only HODLers that submit their API key and secret will be under direct management 

                                </p>
                            </div>
                        </div>
                        <div className='how_card_4'>
                            <div className="my_card mx-auto ms-sm-0 mx-lg-auto">
                                <h2 className='color_white text-center h2_card mb-0 d-flex align-items-center justify-content-center font_2xl mx-auto ff_lato mt-4  '>04</h2>
                                <h3 className='color_white text-center font_lg fw-bold ff_lato mb-0 pt-4'>Passive Income for life</h3>
                                <p className='color_white text-center font_xs fw-normal ff_lato whatPara mx-auto'>As long as your HODL your Cyber Drop, you will be connected under direct management
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowWorksCard