import 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Home() {
  return (
    <>
   
    <div className="hero_area">
        <div className="header_section">
            <div className="container-fluid">
                    <div className="navbar navbar-expand-lg custom_nav-container ">
                        <Link className="navbar-brand" to="/"><span>Neogym</span></Link>
                        <button 
                            className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                <ul className="navbar-nav  ">
                                        <li className="nav-item active">
                                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                        </li>
                                        <li className="nav-item ">
                                        <Link className="nav-link" to="Why"> Why us </Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to="Trainer"> Trainers</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to="Contact"> Contact Us</Link>
                                        </li>
                                </ul>
                                <div className="user_option">
                                    <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div> 

        <div className=" slider_section position-relative">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="col-lg-10 col-md-11 mx-auto">
                                <div className="detail-box">
                                    <div>
                                        <h3>Fitness</h3>
                                        <h2>Training</h2>
                                        <h1>Neogym</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .</p>
                                        <div className=""><a href="">Contact Us</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="col-lg-10 col-md-11 mx-auto">
                                <div className="detail-box">
                                    <div>
                                        <h3>Fitness</h3>
                                        <h2> Training</h2>
                                        <h1>Neogym</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .</p>
                                        <div className="">
                                            <a href="">
                                                Contact Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="col-lg-10 col-md-11 mx-auto">
                                <div className="detail-box">
                                <div>
                                        <h3>Fitness</h3>
                                        <h2> Training</h2>
                                        <h1>Neogym</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .</p>
                                        <div className="">
                                            <a href="">
                                                Contact Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="col-lg-10 col-md-11 mx-auto">
                                <div className="detail-box">
                                        <div>
                                            <h3>Fitness</h3>
                                            <h2> Training</h2>
                                            <h1>Neogym</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .</p>
                                            <div className="">
                                                <a href="">
                                                    Contact Us
                                                </a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="col-lg-10 col-md-11 mx-auto">
                                <div className="detail-box">
                                <div>
                                        <h3>Fitness</h3>
                                        <h2> Training</h2>
                                        <h1>Neogym</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .</p>
                                        <div className="">
                                            <a href="">
                                                Contact Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                </ol>
            </div>
        </div>
    </div>
    
    <div className="us_section layout_padding">
        <div className="container">
            <div className="heading_container">
                <h2>
                Why Choose Us
                </h2>
            </div>

            <div className="us_container ">
                <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="box">
                    <div className="img-box">
                        <img src="src/assets/images/u-1.png" alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>
                        QUALITY EQUIPMENT
                        </h5>
                        <p>
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="box">
                    <div className="img-box">
                        <img src="src/assets/images/u-4.png" alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>
                        NUTRITION
                        </h5>
                        <p>
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="box">
                    <div className="img-box">
                        <img src="src/assets/images/u-2.png" alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>
                        HEALTHY DIET PLAN
                        </h5>
                        <p>
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="box">
                    <div className="img-box">
                        <img src="src/assets/images/u-3.png" alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>
                        SPORT TRAINING
                        </h5>
                        <p>
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>

    <div className="heathy_section layout_padding">
      <div className="container">

        <div className="row">
          <div className="col-md-12 mx-auto">
            <div className="detail-box">
              <h2>
                HEALTHY MIND, HEALTHY BODY
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              </p>
              <div className="btn-box">
                <a href="">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div className="trainer_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>
            Our Gym Trainers
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mx-auto">
            <div className="box">
              <div className="name">
                <h5>
                  Smirth Jon
                </h5>
              </div>
              <div className="img-box">
                <img src="src/assets/images/t1.jpg" alt=""/>
              </div>
              <div className="social_box">
                <img src="src/assets/images/facebook-logo.png" alt=""/>
                <img src="src/assets/images/twitter.png" alt=""/>
                <img src="src/assets/images/instagram-logo.png" alt=""/>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mx-auto">
            <div className="box">
              <div className="name">
                <h5>Jean Doe</h5>
              </div>
              <div className="img-box">
                <img src="src/assets/images/t2.jpg" alt=""/>
              </div>
              <div className="social_box">
                  <img src="src/assets/images/facebook-logo.png" alt=""/>              
                  <img src="src/assets/images/twitter.png" alt=""/>
                  <img src="src/assets/images/instagram-logo.png" alt=""/>
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mx-auto">
            <div className="box">
              <div className="name">
                <h5>
                  Alex Den
                </h5>
              </div>
              <div className="img-box">
                <img src="src/assets/images/t3.jpg" alt=""/>
              </div>
              <div className="social_box">
                  <img src="src/assets/images/facebook-logo.png" alt=""/>
                
                  <img src="src/assets/images/twitter.png" alt=""/>
                
                  <img src="src/assets/images/instagram-logo.png" alt=""/>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="contact_section ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 px-0">
            <div className="img-box">
              <img src="src/assets/images/contact-img.jpg" alt=""/>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="form_container pr-0 pr-lg-5 mr-0 mr-lg-2">
              <div className="heading_container">
                <h2>
                  Contact Us
                </h2>
              </div>
              <form action="">
                <div>
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div>
                  <input type="text" className="message-box" placeholder="Message" />
                </div>
                <div className="d-flex ">
                  <button>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="info_section layout_padding2">
      <div className="container">
        <div className="info_items">
          <a href="">
            <div className="item ">
              <div className="img-box box-1">
                <img src="" alt=""/>
              </div>
              <div className="detail-box">
                <p>
                  Location
                </p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="item ">
              <div className="img-box box-2">
                <img src="" alt=""/>
              </div>
              <div className="detail-box">
                <p>
                  +02 1234567890
                </p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="item ">
              <div className="img-box box-3">
                <img src="" alt=""/>
              </div>
              <div className="detail-box">
                <p>
                  demo@gmail.com
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <footer className="container-fluid footer_section">
    <p>
      &copy; 2025 All Rights Reserved. Design by
      <a href="https://html.design/">Free Html Templates</a>
    </p>
    </footer>
  </>
  )
}

export default Home