import React  from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CaretLeft, CaretRight } from 'react-bootstrap-icons'
import MyButton from './MyButton'
import { useState } from 'react'

const Carousel = () => {
    const [page,setPage] = useState(1)
    console.log(page);
    return (
        <div className='position-relative carousel-banner py-5'>
            <Container className='my-3'>
                <Col lg={12}>
                    <Row>
                        <Col lg={6}>
                            <div className='d-flex flex-column'>
                                <h1 style={{ color: '#84c604', fontSize: '90px', fontFamily: 'Lemon Tuesday' }}>Счастливые часы</h1>
                                <h4 className='text-light' style={{ fontStyle: 'italic' }}>с 11:00 до 16:00 в будние дни</h4>
                                <MyButton title={'Подробнее'} />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="circle">
                                скидка 15%
                            </div>
                        </Col>
                    </Row>
                    <Col lg={12} className='mt-3'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className="mx-2 index-circle active"></div>
                            <div className="mx-2 index-circle"></div>
                            <div className="mx-2 index-circle"></div>
                        </div>
                    </Col>
                </Col>
            </Container>
            {/* next prev buttons */}
            <div style={{ top: "50%", transform: "translateY(-50%)" }} className="position-absolute px-5 next-prev-buttons w-100 d-flex justify-content-between align-items-center">
                <button onClick={()=>setPage(page-1)} className='prev'>
                    <CaretLeft />
                </button>
                <button onClick={()=>setPage(page+1)} className='next'>
                    <CaretRight />
                </button>
            </div>
        </div>
    )
}

export default Carousel
