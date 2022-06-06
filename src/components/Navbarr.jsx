import React from 'react'
import { Col, Container, Nav, Row, Navbar, NavItem, Badge } from 'react-bootstrap'
import { Cart2, People } from 'react-bootstrap-icons'

const Navbarr = () => {
    return (
        <Container>
            <Row>
                <Col lg={8}>
                    <Navbar style={{ padding: 0 }} >
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto d-flex justify-content-between align-items-center ">
                                <select className="navbtn" value="Меню" id="basic-nav-dropdown">
                                    <option href="">Меню</option>
                                </select>
                                <a className='navbtn' href="#">Акции и скидки</a>
                                <a className='navbtn' href="#">Доставка и оплата</a>
                                <a className='navbtn' href="#">Новости</a>
                                <a className='navbtn' href="#">Контакты</a>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
                <Col lg={4}>
                    <Navbar className='d-flex justify-content-center align-items-center p-0'>
                        <Navbar.Collapse className='justify-content-around align-items-center'>
                            <div className='d-flex justify-content-center align-items-center' >
                                <a className='navbtn' href="#">
                                    <People color='#1fba0a' size={20} className='me-2' />
                                    Кабинет
                                </a>
                            </div>
                            <div className='d-flex justify-content-center align-items-center' >
                                <a href='#' className='navbtn position-relative' variant="">
                                    <Cart2 size={20} color='#1fba0a' className='me-3' />
                                    <Badge bg={'#fd4f10'} className='position-absolute badge-edit'>9</Badge>
                                    Корзина
                                </a>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbarr
