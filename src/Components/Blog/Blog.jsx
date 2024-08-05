import React, { useEffect } from 'react'
import Newsletter from '../Newsletter/Newsletter'

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
                    <img class="img-fluid mb-4" src="img/blog-1.jpg" alt=""/>
                    <a href="" class="h5 lh-base d-inline-block">Natural Remedies for Common Ailments</a>
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
                    <p class="mb-4">Discover effective natural remedies for common ailments such as colds, headaches, and digestive issues. Learn how ingredients like ginger, turmeric, and peppermint can help alleviate symptoms and promote overall health without the side effects of conventional medications.</p>
                    <a href="" class="btn btn-outline-primary px-3">Read More</a>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                <div class="blog-item border h-100 p-4">
                    <img class="img-fluid mb-4" src="img/blog-2.jpg" alt=""/>
                    <a href="" class="h5 lh-base d-inline-block">The Importance of Preventive Healthcare</a>
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
                    <p class="mb-4">Preventive healthcare is crucial for maintaining long-term health. Regular check-ups, vaccinations, and healthy lifestyle choices can help prevent diseases before they start. Learn more about the steps you can take to stay healthy and avoid chronic illnesses.</p>
                    <a href="" class="btn btn-outline-primary px-3">Read More</a>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                <div class="blog-item border h-100 p-4">
                    <img class="img-fluid mb-4" src="img/blog-3.jpg" alt=""/>
                    <a href="" class="h5 lh-base d-inline-block">How to Use Our Natural & Organic Remedies</a>
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
                    <p class="mb-4">Learn how to effectively use our natural and organic remedies to improve your health. From herbal teas to essential oils, our guide provides detailed instructions on how to integrate these products into your daily routine for maximum benefit.</p>
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