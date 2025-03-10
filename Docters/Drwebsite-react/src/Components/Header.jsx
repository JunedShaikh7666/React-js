import 'react'
function Header() {
  return (
    <>
        <div className="preloader">
            <div className="loader">
                <div className="loader-outter"></div>
                <div className="loader-inner"></div>

                <div className="indicator"> 
                    <svg width="16px" height="12px">
                        <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                        <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                    </svg>
                </div>
            </div>
        </div>
        
		<ul className="pro-features">
			<a className="get-pro" href="#">Get Pro</a>
			<li className="big-title">Pro Version Available on Themeforest</li>
			<li className="title">Pro Version Features</li>
			<li>2+ premade home pages</li>
			<li>20+ html pages</li>
			<li>Color Plate With 12+ Colors</li>
			<li>Sticky Header / Sticky Filters</li>
			<li>Working Contact Form With Google Map</li>
			<div className="button">
				<a href="http://preview.themeforest.net/item/mediplus-medical-and-doctor-html-template/full_screen_preview/26665910?_ga=2.145092285.888558928.1591971968-344530658.1588061879" target="_blank" className="btn">Pro Version Demo</a>
				<a href="https://themeforest.net/item/mediplus-medical-and-doctor-html-template/26665910" target="_blank" className="btn">Buy Pro Version</a>
			</div>
		</ul>
	
		<header className="header" >
			{/* <!-- Topbar --> */}
			<div className="topbar">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-5 col-12">
							{/* <!-- Contact --> */}
							<ul className="top-link">
								<li><a href="/about">About</a></li>
								<li><a href="/docters">Doctors</a></li>
								<li><a href="/contact">Contact</a></li>
								<li><a href="/">FAQ</a></li>
							</ul>
							{/* <!-- End Contact --> */}
						</div>
						<div className="col-lg-6 col-md-7 col-12">
							{/* <!-- Top Contact --> */}
							<ul className="top-contact">
								<li><i className="fa fa-phone"></i>+880 1234 56789</li>
								<li><i className="fa fa-envelope"></i><a href="mailto:support@yourmail.com">support@yourmail.com</a></li>
							</ul>
							{/* <!-- End Top Contact --> */}
						</div>
					</div>
				</div>
			</div>
			{/* <!-- End Topbar -->
			<!-- Header Inner --> */}
			<div className="header-inner">
				<div className="container">
					<div className="inner">
						<div className="row">
							<div className="col-lg-3 col-md-3 col-12">
								{/* <!-- Start Logo --> */}
								<div className="logo">
									<a href="index.html"><img src="src/assets/img/logo.png" alt="#"/></a>
								</div>
								{/* <!-- End Logo -->
								<!-- Mobile Nav --> */}
								<div className="mobile-nav"></div>
								{/* <!-- End Mobile Nav --> */}
							</div>
							<div className="col-lg-7 col-md-9 col-12">
								{/* <!-- Main Menu --> */}
								<div className="main-menu">
									<nav className="navigation">
										<ul className="nav menu">
											<li className="active"><a href="/">Home <i className="icofont-rounded-down"></i></a>
												<ul className="dropdown">
													<li><a href="/">Home Page 1</a></li>
												</ul>
											</li>
											<li><a href="/docters">Doctos </a></li>
											<li><a href="/services">Services </a></li>
											<li><a href="/pages">Pages <i className="icofont-rounded-down"></i></a>
												<ul className="dropdown">
													<li><a href="pages">404 Error</a></li>
												</ul>
											</li>
											<li><a href="/blog">Blogs <i className="icofont-rounded-down"></i></a>
												<ul className="dropdown">
													<li><a href="/blog">Blog Details</a></li>
												</ul>
											</li>
											<li><a href="/contactUs">Contact Us</a></li>
										</ul>
									</nav>
								</div>
								{/* <!--/ End Main Menu --> */}
							</div>
							<div className="col-lg-2 col-12">
								<div className="get-quote">
									<a href="appointment.html" className="btn">Book Appointment</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--/ End Header Inner --> */}
		</header>
    </>
  )
}

export default Header