import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import image from '../../Images/WhatsApp Image 2024-08-05 at 12.53.19.jpeg'
const DealStart = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <>
            <div class="container-fluid deal bg-primary my-5 py-5">
                <div class="container py-5">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <img class="img-fluid animated pulse infinite" src={image} />
                        </div>
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div class="bg-white text-center p-4">
                                <div class="border p-4">
                                    <p class="mb-2">High-Quality Medicine</p>
                                    <h2 class="fw-bold text-uppercase mb-4">Deals of the Day</h2>
                                    <h1 class="display-4 text-primary mb-4">$29.99</h1>
                                    <h5>Effective Pain Relief</h5>
                                    <p class="mb-4">Our effective pain relief medicine provides quick and long-lasting relief from various types of pain, ensuring comfort and well-being.</p>
                                    <div class="row g-0 cdt mb-4">
                                        <div class="col-3">
                                            <h1 class="display-6" id="cdt-days"></h1>
                                        </div>
                                        <div class="col-3">
                                            <h1 class="display-6" id="cdt-hours"></h1>
                                        </div>
                                        <div class="col-3">
                                            <h1 class="display-6" id="cdt-minutes"></h1>
                                        </div>
                                        <div class="col-3">
                                            <h1 class="display-6" id="cdt-seconds"></h1>
                                        </div>
                                    </div>
                                    <Link class="btn btn-primary py-2 px-4" to="/product">Shop Now</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DealStart