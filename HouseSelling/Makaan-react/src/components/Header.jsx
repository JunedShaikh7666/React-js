import React from 'react'

function Header() {
  return (
    <>
    {/* <div id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div  className="spinner-border text-primary"  style={{ width: "3rem", height: "3rem" }} role="status">
                <span className="sr-only">Loading...</span>
            </div>
    </div> */}

    <div className="container-fluid nav-bar bg-transparent">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
                    <div className="icon p-2 me-2">
                        <img className="img-fluid" src="src/assets/img/icon-deal.png" alt="Icon" style={{width: "30px", height: "30px"}} />
                    </div>
                    <h1 className="m-0 text-primary">Makaan</h1>
                </a>
                <button  type="button"  className="navbar-toggler"  data-bs-toggle="collapse"  data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a href="property-list.html" className="dropdown-item">Property List</a>
                                <a href="property-type.html" className="dropdown-item">Property Type</a>
                                <a href="property-agent.html" className="dropdown-item">Property Agent</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Error</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    <a href="" className="btn btn-primary px-3 d-none d-lg-flex">Add Property</a>
                </div>
            </nav>
    </div>

    <div className="container-fluid header bg-white p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-lg-5">
                    <h1 className="display-5 animated fadeIn mb-4">Find A <span className="text-primary">Perfect Home</span> To Live With Your Family</h1>
                    <p className="animated fadeIn mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet
                        sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                    <a href="" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
                </div>
                <div className="col-md-6 animated fadeIn">
                    <div className="owl-carousel header-carousel">
                        <div className="owl-carousel-item">
                            <img className=" img-fluid" src="src/assets/img/carousel-1.jpg" alt=""/>
                        </div>
                        <div className="owl-carousel-item">
                            <img className="img-fluid" src="src/assets/img/carousel-2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</>
  )
}

export default Header