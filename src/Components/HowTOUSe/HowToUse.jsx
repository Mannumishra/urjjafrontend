import React, { useEffect } from 'react'
import image from '../../Images/Woman-washing-her-hair-in-the-shower.webp'
import image1 from '../../Images/How_to_use_shampoo_conditioner.webp'
import image2 from '../../Images/5_min-removebg-preview.png'
const HowToUse = () => {
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
                location === '/how_to_use' ? <div class="container-fluid bg-primary hero-header mb-5">
                    <div class="container text-center">
                        <h1 class="display-4 text-white mb-3 animated slideInDown">How To Use</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center mb-0 animated slideInDown">
                                <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">How To Use</li>
                            </ol>
                        </nav>
                    </div>
                </div> : null
            }
            {/* <!-- Hero End --> */}


            {/* <!-- Feature Start --> */}
            {
                location === '/how_to_use' ? <div class="container-fluid py-5">
                    <div class="container">
                        <div class="row g-4">
                            <div class="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div class="feature-item position-relative bg-primary text-center p-3">
                                    <div class="border py-5 px-3">
                                        <i class="fa fa-leaf fa-3x text-dark mb-4"></i>
                                        <h5 class="text-white mb-0">100% Natural</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                <div class="feature-item position-relative bg-primary text-center p-3">
                                    <div class="border py-5 px-3">
                                        <i class="fa fa-tint-slash fa-3x text-dark mb-4"></i>
                                        <h5 class="text-white mb-0">Anti Hair Fall</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                <div class="feature-item position-relative bg-primary text-center p-3">
                                    <div class="border py-5 px-3">
                                        <i class="fa fa-times fa-3x text-dark mb-4"></i>
                                        <h5 class="text-white mb-0">Hypoallergenic</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null
            }
            {/* <!-- Feature End --> */}


            {/* <!-- How To Use Start --> */}
            <div class="container-fluid how-to-use bg-primary my-5 py-5">
                <div class="container text-white py-5">
                    <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h1 class="text-white mb-3"><span class="fw-light text-dark">How To Use Our</span> Natural & Organic
                            <span class="fw-light text-dark">Medicines</span></h1>
                        <p class="mb-5">Follow these simple steps to make the most of our natural and organic medicines for optimal health benefits.</p>
                    </div>
                    <div class="row g-5">

                        <div class="col-lg-4 text-center wow fadeIn" data-wow-delay="0.3s">
                            <div class="btn-square rounded-circle border mx-auto mb-4" style={{ width: "210px", height: "210px" }}>
                                <img src={image1} alt="" style={{ height: 200, width: 200, borderRadius: "50%" }} />
                            </div>
                            <h5 class="text-white">Dosage Instructions</h5>
                            <hr class="w-25 bg-light my-2 mx-auto" />
                            <span>Take the prescribed dosage as per the label instructions or your healthcare provider's recommendations. Ensure to follow the dosage and timing for the best results.</span>
                        </div>
                        <div class="col-lg-4 text-center wow fadeIn" data-wow-delay="0.5s">
                            <div class="btn-square rounded-circle border mx-auto mb-4" style={{ width: "210px", height: "210px" }}>
                                <img src={image2} alt="" style={{ height: 200, width: 200, borderRadius: "50%" }} />
                            </div>
                            <h5 class="text-white">Consistent Use</h5>
                            <hr class="w-25 bg-light my-2 mx-auto" />
                            <span>For optimal results, use the medicine consistently as directed. Avoid skipping doses and maintain a regular schedule to ensure effectiveness.</span>
                        </div>
                        <div class="col-lg-4 text-center wow fadeIn" data-wow-delay="0.1s">
                            <div class="btn-square rounded-circle border mx-auto mb-4" style={{ width: "210px", height: "210px" }}>
                                <img src={image} alt="" style={{ height: 200, width: 200, borderRadius: "50%" }} />
                            </div>
                            <h5 class="text-white">Consultation</h5>
                            <hr class="w-25 bg-light my-2 mx-auto" />
                            <span>If you experience any side effects or have questions about the medicine, consult with your healthcare provider. Proper guidance can help address any concerns and ensure safe usage.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- How To Use End --> */}
        </>
    )
}

export default HowToUse