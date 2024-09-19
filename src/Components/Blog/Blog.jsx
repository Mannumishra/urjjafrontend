import React, { useEffect } from 'react'
import Newsletter from '../Newsletter/Newsletter'
import image1 from "./blog1.jpg"
import image2 from "./blog2.jpg"
import image3 from"./blog3.jpg"

const Blog = () => {
    const location = window.location.pathname
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[])
  return (
    <>
    
    {/* <!-- Hero Start --> */}
   {
    location==='/blog'? <div class="container-fluid bg-primary hero-header mb-5">
    <div class="container text-center">
        <h1 class="display-4 text-white mb-3 animated slideInDown">Blog Articles</h1>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0 animated slideInDown">
                <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                <li class="breadcrumb-item text-white active" aria-current="page">Blog Articles</li>
            </ol>
        </nav>
    </div>
</div>:null
   }
    {/* <!-- Hero End --> */}


    {/* <!-- Blog Start --> */}
    <div class="container-fluid py-5">
    <div class="container">
        <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
            <h1 class="text-primary mb-3"><span class="fw-light text-dark">From Our</span> Blog Articles</h1>
            <p class="mb-5">Explore insights and tips from our blog articles, featuring expert advice on medical care, health routines, and the benefits of using natural and organic remedies. Stay informed and enhance your healthcare regimen with our latest articles.</p>
        </div>
        <div class="row g-4">
            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                <div class="blog-item border h-100 p-4">
                    <img class="img-fluid mb-4" src={image1} alt=""/>
                    <a href="" class="h5 lh-base d-inline-block">Innovative Solutions for Global Health Challenges</a>
                    <div class="d-flex text-black-50 mb-2">
                        <div class="pe-3">
                            <small class="fa fa-eye me-1"></small>
                            <small>9999 Views</small>
                        </div>
                        <div class="pe-3">
                            <small class="fa fa-comments me-1"></small>
                            <small>9999 Comments</small>
                        </div>
                    </div>
                    <p class="mb-4">Discover how Zens Health Care is developing innovative pharmaceutical solutions to tackle global health issues, offering new hope to patients worldwide with cutting-edge therapies and medications.</p>
                    <a href="" class="btn btn-outline-primary px-3">Read More</a>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                <div class="blog-item border h-100 p-4">
                    <img class="img-fluid mb-4" src={image2} alt=""/>
                    <a href="" class="h5 lh-base d-inline-block">The Importance of Preventive Medicine in Modern Healthcare</a>
                    <div class="d-flex text-black-50 mb-2">
                        <div class="pe-3">
                            <small class="fa fa-eye me-1"></small>
                            <small>9999 Views</small>
                        </div>
                        <div class="pe-3">
                            <small class="fa fa-comments me-1"></small>
                            <small>9999 Comments</small>
                        </div>
                    </div>
                    <p class="mb-4">Preventive medicine plays a critical role in maintaining long-term health. Learn how regular health check-ups, vaccinations, and lifestyle choices contribute to disease prevention and better well-being.</p>
                    <a href="" class="btn btn-outline-primary px-3">Read More</a>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                <div class="blog-item border h-100 p-4">
                    <img class="img-fluid mb-4" src={image3} alt=""/>
                    <a href="" class="h5 lh-base d-inline-block">Maximizing the Benefits of Our Medications</a>
                    <div class="d-flex text-black-50 mb-2">
                        <div class="pe-3">
                            <small class="fa fa-eye me-1"></small>
                            <small>9999 Views</small>
                        </div>
                        <div class="pe-3">
                            <small class="fa fa-comments me-1"></small>
                            <small>9999 Comments</small>
                        </div>
                    </div>
                    <p class="mb-4">Find out how to get the most out of Zens Health Care’s pharmaceutical products. From proper dosage to understanding potential interactions, this guide helps you use our medications safely and effectively.</p>
                    <a href="" class="btn btn-outline-primary px-3">Read More</a>
                </div>
            </div>
        </div>
    </div>
</div>

    {/* <!-- Blog End --> */}
{
    location==='/blog'?<Newsletter />:null
}
    </>
  )
}

export default Blog