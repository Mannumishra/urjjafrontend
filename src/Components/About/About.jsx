import React, { useEffect } from 'react'
import Newsletter from '../Newsletter/Newsletter'
import { Link } from 'react-router-dom'
import image from '../../Images/zens about.jpeg'
import "./About.css"

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
                    </div>
                </div>
            </div>
            {/* <!-- Feature End --> */}


            {/* <!-- About Start --> */}
            <div className="container-fluid">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        {/* Conditionally render the image only on the homepage */}
                        {location !== "/about" && (
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <img className="img-fluid animated pulse infinite" src={image} alt="Medicine" />
                            </div>
                        )}

                        {/* Adjust column width based on the location */}
                        <div className={`col-lg-${location === "/about" ? "12" : "6"} wow fadeIn`} data-wow-delay="0.5s">
                            <h1 className="text-primary mb-4">We Are Committed <span className="fw-light text-dark"> -To Quality Economy & Efficacy</span></h1>
                            {location === "/about" ? <h3>About Us</h3> : null}
                            <p className="mb-4">Welcome to <strong>Zens Health Care</strong>, a leader in pharmaceutical innovation dedicated to improving global health and well-being. We are committed to delivering high-quality, effective, and accessible medications to patients worldwide.</p>
                            {location === "/about" ? <h3>Our Mission</h3> : null}
                            <p className="mb-4">Our mission is to enhance the quality of life for individuals by providing innovative pharmaceuticals. We are driven by a passion for science and a commitment to meet the evolving healthcare needs of communities around the globe.</p>
                            {location === "/about" ? <h3>Our Expertise</h3> : null}
                            <p className="mb-4">Our extensive portfolio includes a range of medications, from life-saving treatments for chronic conditions to everyday wellness products. We leverage advanced technologies and collaborate with healthcare providers to bring new and effective treatments to market swiftly and safely.</p>

                            {/* Additional content for the /about page */}
                            {location === "/about" && (
                                <>
                                    <h3>Our Values</h3>
                                    <p className="mb-4">
                                        • Quality: Patient safety and product quality are at the core of everything we do. We adhere to the highest standards in every aspect of our work, from research and manufacturing to distribution. <br />
                                        • Integrity: We operate with transparency and ethical practices, ensuring that we earn the trust of healthcare professionals, patients, and stakeholders. <br />
                                        • Patient-Centric Approach: Our focus is on the patient. We strive to understand and address their needs, ensuring our products are not only effective but also accessible.
                                    </p>
                                    <h3>Commitment to Sustainability</h3>
                                    <p className="mb-4">We believe in making a positive impact not just on individual lives but also on the environment. Our commitment to sustainability is reflected in our eco-friendly manufacturing processes, reduction of carbon footprint, and initiatives to promote health and wellness in the communities we serve.</p>
                                    <h3>Our History</h3>
                                    <p className="mb-4">Founded in 2014, Zens Health Care has grown from a small research lab into a globally recognized pharmaceutical company. Our journey is marked by milestones in medical breakthroughs, regulatory approvals, and a steadfast dedication to improving health outcomes.</p>
                                    <h3>Join Us</h3>
                                    <p className="mb-4"> At Zens Health Care, we believe that collaboration is key to achieving our mission. We invite healthcare professionals, researchers, and partners to join us in our pursuit of a healthier world.</p>
                                </>
                            )}

                            <Link className="btn btn-primary py-2 px-4" to="/about">Show More</Link>
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