import React, { useEffect } from 'react'
import Newsletter from '../Newsletter/Newsletter'
import image from '../../Images/WhatsApp Image 2024-08-05 at 12.53.23.jpeg'

const Feauture = () => {
    const location = window.location.pathname
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <>

            {/* <!-- Hero Start --> */}
            {
                location === '/feature' ? <div class="container-fluid bg-primary hero-header mb-5">
                    <div class="container text-center">
                        <h1 class="display-4 text-white mb-3 animated slideInDown">Features</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center mb-0 animated slideInDown">
                                <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">Features</li>
                            </ol>
                        </nav>
                    </div>
                </div> : null
            }
            {/* <!-- Hero End --> */}


            {/* <!-- Feature Start --> */}
            {
                location === '/feature' ? <div class="container-fluid py-5">
                    <div class="container">
                        <div class="row g-4">
                            <div class="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div class="feature-item position-relative bg-primary text-center p-3">
                                    <div class="border py-5 px-3">
                                        <i class="fa fa-leaf fa-3x text-dark mb-4"></i>
                                        <h5 class="text-white mb-0">100% Natural Ingredients</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                <div class="feature-item position-relative bg-primary text-center p-3">
                                    <div class="border py-5 px-3">
                                        <i class="fa fa-medkit fa-3x text-dark mb-4"></i>
                                        <h5 class="text-white mb-0">Effective Remedies</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                <div class="feature-item position-relative bg-primary text-center p-3">
                                    <div class="border py-5 px-3">
                                        <i class="fa fa-heartbeat fa-3x text-dark mb-4"></i>
                                        <h5 class="text-white mb-0">Clinically Tested</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> : null
            }
            {/* <!-- Feature End --> */}


            {/* <!-- Feature Start --> */}
            <div class="container-fluid py-5">
                <div class="container">
                    <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h1 class="text-primary mb-3"><span class="fw-light text-dark">Best Benefits Of Our</span> High-Quality Medicine</h1>
                        <p class="mb-5">Our high-quality medicine offers the best benefits by providing effective relief with scientifically proven ingredients, ensuring safety, and promoting overall health.</p>
                    </div>
                    <div class="row g-4 align-items-center">
                        <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div class="row g-5">
                                <div class="col-12 d-flex">
                                    <div class="btn-square rounded-circle border flex-shrink-0"
                                        style={{ width: "80px", height: "80px" }}>
                                        <i class="fa fa-check fa-2x text-primary"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h5>Clinically Proven</h5>
                                        <hr class="w-25 bg-primary my-2" />
                                        <span>Our medicine is clinically proven to provide effective relief from symptoms.</span>
                                    </div>
                                </div>
                                <div class="col-12 d-flex">
                                    <div class="btn-square rounded-circle border flex-shrink-0"
                                        style={{ width: "80px", height: "80px" }}>
                                        <i class="fa fa-check fa-2x text-primary"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h5>Fast-Acting Formula</h5>
                                        <hr class="w-25 bg-primary my-2" />
                                        <span>Our fast-acting formula provides quick relief, ensuring comfort and well-being.</span>
                                    </div>
                                </div>
                                <div class="col-12 d-flex">
                                    <div class="btn-square rounded-circle border flex-shrink-0"
                                        style={{ width: "80px", height: "80px" }}>
                                        <i class="fa fa-check fa-2x text-primary"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h5>High-Quality Ingredients</h5>
                                        <hr class="w-25 bg-primary my-2" />
                                        <span>Made with high-quality ingredients to ensure maximum efficacy and safety.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <img class="img-fluid animated pulse infinite" src={image} />
                        </div>
                        <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div class="row g-5">
                                <div class="col-12 d-flex">
                                    <div class="btn-square rounded-circle border flex-shrink-0"
                                        style={{ width: "80px", height: "80px" }}>
                                        <i class="fa fa-check fa-2x text-primary"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h5>Trusted by Professionals</h5>
                                        <hr class="w-25 bg-primary my-2" />
                                        <span>Our products are recommended by healthcare professionals for their proven efficacy.</span>
                                    </div>
                                </div>
                                <div class="col-12 d-flex">
                                    <div class="btn-square rounded-circle border flex-shrink-0"
                                        style={{ width: "80px", height: "80px" }}>
                                        <i class="fa fa-check fa-2x text-primary"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h5>Clinically Tested</h5>
                                        <hr class="w-25 bg-primary my-2" />
                                        <span>Our medications undergo rigorous clinical testing to ensure safety and effectiveness.</span>
                                    </div>
                                </div>
                                <div class="col-12 d-flex">
                                    <div class="btn-square rounded-circle border flex-shrink-0"
                                        style={{ width: "80px", height: "80px" }}>
                                        <i class="fa fa-check fa-2x text-primary"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h5>Advanced Formulations</h5>
                                        <hr class="w-25 bg-primary my-2" />
                                        <span>We use cutting-edge technology and research to create advanced pharmaceutical formulations.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Feature End --> */}

            {
                location === '/feature' ? <Newsletter /> : null
            }
        </>
    )
}

export default Feauture