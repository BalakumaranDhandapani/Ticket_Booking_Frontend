import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import MoviesCard from './MoviesCard'
import Slider from './Slider'
import NavBarTop from './NavBarTop'

function Portal() {
    return (
        <>
            <div id="wrapper">
                <NavBarTop />
                <div id="content-wrapper" className="d-flex">
                    <div id="content">
                        <Slider />
                        <div className="container-fluid m-3">
                            <div className='row'>
                                <h2 className='main-title text-center'>MOVIES</h2>
                                <MoviesCard />
                                {/* <Outlet></Outlet> */}
                            </div>
                        </div>
                        <div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portal