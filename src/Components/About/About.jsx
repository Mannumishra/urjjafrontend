import React, { useEffect } from 'react'
import Newsletter from '../Newsletter/Newsletter'
import { Link } from 'react-router-dom'
import image from '../../Images/WhatsApp Image 2024-08-05 at 12.53.42.jpeg'

const About = () => {
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
                location === '/about' ? <div class="container-fluid bg-primary hero-header mb-5">
                    <div class="container text-center">
                        <h1 class="display-4 text-white mb-3 animated slideInDown">About Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center mb-0 animated slideInDown">
                                <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                            </ol>
                        </nav>
                    </div>
                </div> : null
            }
            {/* <!-- Hero End --> */}


            {/* <!-- Feature Start --> */}
            <div class="container-fluid py-5">
                <div class="container">
                    <div class="row g-4" >
                        <div class="col-md-3 py-5 px-3" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <i class="fa fa-pills fa-3x text-dark mb-4"></i>
                            <h5 class="text-dark mb-0">100% Organic</h5>
                        </div>
                        <div className="col-md-3 py-5 px-3" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <i class="fa fa-heartbeat fa-3x text-dark mb-4"></i>
                            <h5 class="text-dark mb-0">Boosts Immunity</h5>
                        </div>
                        <div className="col-md-3 py-5 px-3" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <i class="fa fa-stethoscope fa-3x text-dark mb-4"></i>
                            <h5 class="text-dark mb-0">Clinically Tested</h5>
                        </div>
                        <div class="col-md-3 py-5 px-3" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <i class="fa fa-certificate fa-3x text-dark mb-4"></i>
                            <h5 class="text-dark mb-0">Certified Quality</h5>
                        </div>
                        {/* <div className="col-md-2 py-5 px-3" style={{display:"flex",flexDirection:"column" ,justifyContent:"center" ,alignItems:"center"}}>
                            <i class="fa fa-tint-slash fa-3x text-dark mb-4"></i>
                            <h5 class="text-dark mb-0">Anti Hair Fall</h5>
                        </div>
                        <div className="col-md-2 py-5 px-3" style={{display:"flex",flexDirection:"column" ,justifyContent:"center" ,alignItems:"center"}}>
                            <i class="fa fa-times fa-3x text-dark mb-4"></i>
                            <h5 class="text-dark mb-0">Hypoallergenic</h5>
                        </div> */}
                        {/* <div class="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <div class="feature-item position-relative bg-primary text-center p-3">
                        <div class="border py-5 px-3">
                            <i class="fa fa-leaf fa-3x text-dark mb-4"></i>
                            <h5 class="text-white mb-0">100% Natural</h5>
                        </div>
                    </div>
                </div> */}
                        {/* <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div class="feature-item position-relative bg-primary text-center p-3">
                                <div class="border py-5 px-3">
                                    <i class="fa fa-tint-slash fa-3x text-dark mb-4"></i>
                                    <h5 class="text-white mb-0">Anti Hair Fall</h5>
                                </div>
                            </div>
                        </div> */}
                        {/* <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div class="feature-item position-relative bg-primary text-center p-3">
                                <div class="border py-5 px-3">
                                    <i class="fa fa-times fa-3x text-dark mb-4"></i>
                                    <h5 class="text-white mb-0">Hypoallergenic</h5>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <!-- Feature End --> */}


            {/* <!-- About Start --> */}
            <div className="container-fluid">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <img className="img-fluid animated pulse infinite" src={image} alt="Medicine" />
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="text-primary mb-4">Health is Wealth <span className="fw-light text-dark"> - Quality Medicines for Your Well-being</span></h1>
                            <p className="mb-4">Quality medicine is essential for maintaining health and managing diseases effectively. It ensures that patients receive the correct treatment, leading to better health outcomes and improved quality of life.</p>
                            <p className="mb-4">Our range of medicines is rigorously tested and approved to ensure they meet the highest standards of safety and efficacy. By choosing our products, you can trust that you are making a responsible choice for your health.</p>
                            <p className="mb-4">In addition to high-quality medicines, we offer guidance on proper usage and dosage to maximize benefits and minimize risks. Our commitment to excellence in healthcare is reflected in every product we offer.</p>
                            <Link className="btn btn-primary py-2 px-4" to="/product">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}

            {location === '/about' ? <Newsletter /> : null}


        </>
    )
}

export default About