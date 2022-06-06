import React from 'react'
import Carousel from './components/Carousel'
import Header from './components/Header'
import Navbarr from './components/Navbarr'

const Main = () => {
    return (
        <div>
            <Header />
            <hr style={{ opacity: '0.08', margin:0 }} />
            <Navbarr />
            <Carousel />
        </div>
    )
}

export default Main
