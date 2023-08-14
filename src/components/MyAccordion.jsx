import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
const MyAccordion = () => {
    return (
        <>
            <section>
                <div className="mycontainer">
                <h2 className='font_4xl color_orange ff_lato fw-bolder mb-0 text-center py-5'>FAQ<span className='color_white'>’s</span></h2>
                    <Row className='justify-content-center'>
                        <Col md={10}>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Egestas scelerisque duis quis aliquet. Consectetur?</Accordion.Header>
                                    <Accordion.Body>
                                    Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" >
                                    <Accordion.Header>Ac nec enim amet, leo lorem quis neque vitae aliquet?</Accordion.Header>
                                    <Accordion.Body>
                                    Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Sit laoreet nibh sit hac potenti. Non ullamcorper fames nibh donec?</Accordion.Header>
                                    <Accordion.Body>
                                    Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Porta amet tortor nec pulvinar urna. Et blandit sit id?</Accordion.Header>
                                    <Accordion.Body>
                                    Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Tellus hendrerit fermentum ut hendrerit ac vestibulum? </Accordion.Header>
                                    <Accordion.Body>
                                    Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default MyAccordion