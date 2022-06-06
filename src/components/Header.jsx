import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { GeoAltFill, EnvelopeFill } from 'react-bootstrap-icons'
import Logo from '../img/logo.png'


const Header = () => {
    return (
        <Container>
            <Row className='align-items-center pt-2 pb-2'>
                <Col lg={2}>
                    <img src={Logo} alt="" />
                </Col>
                <Col lg={3}>
                    <div className='d-flex justify-content-center align-items-center'>
                        <GeoAltFill className='me-1' color='#1fba0a' />
                        <h6> г. Курск, ул. Ленина, д. 3</h6>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className='d-flex justify-content-center align-items-center'>
                        <EnvelopeFill className='me-1' color='#1fba0a' />
                        <h6> 78003332222@yandex.ru</h6>
                    </div>
                </Col>
                <Col lg={2}>
                    <h5>+7(800)333 22 22</h5>
                    <p style={{ fontSize: "10px" }}>Работаем с 11.00 до 23.00</p>
                </Col>
                <Col lg={2}>
                    <a href="tel:+78003332222">
                        <Button style={{ fontSize: "13px" }} variant='outline-success'>Обратный звонок</Button>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Header
