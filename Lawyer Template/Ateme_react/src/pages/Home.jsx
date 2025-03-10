import "react";
import {Link} from 'react-router-dom'
function Home() {
   const carouselItems = [
      {
         key : 1,
         title: 'We Provide Law Practice',
         text: 'Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem',
         readMoreLink: '#',
         contactUsLink: '#',
         imgSrc: 'src/assets/images/banner-img.png',
         isActive: true
      },
   ];
   return (
    <>
    {/* {logo.img} */}
      <div className="header_section">
         <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <a className="navbar-brand"href="index.html" ><img src="src/assets/images/logo.png" /></a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                     <li className="nav-item active">
                        <treact-router-domLink className="nav-link" to="index.html">Home</treact-router-domLink>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/what">What we do</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                     </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                     <div className="login_bt">
                        <ul>
                           <li><a href="#"><span className="user_icon"><i className="fa fa-user" aria-hidden="true"></i></span>Login</a></li>
                           <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                        </ul>
                     </div>
                  </form>
               </div>
            </nav>
         </div>
         {/* <!-- banner section start -->  */}
         <div className="banner_section layout_padding">
            <div className="container-fluid">
               <div id="banner_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     {/* Map is used here... */}
                     <div className="carousel">
                        {carouselItems.map((item, index) => (
                           <div key={index} className={`carousel-item ${item.isActive ? 'active' : ''}`}>
                              <div className="row">
                                 <div className="col-md-6">
                                 <div className="banner_taital_main">
                                    <h1 className="banner_taital">{item.title}</h1>
                                    <p className="banner_text">{item.text}</p>
                                    <div className="readmore_btn active">
                                       <a href={item.readMoreLink}>Read More</a>
                                    </div>
                                    <div className="started_bt">
                                       <a href={item.contactUsLink}>Contact Us</a>
                                    </div>
                                 </div>
                                 </div>
                                 <div className="col-md-6">
                                 <div className="banner_img">
                                    <img src={item.imgSrc} alt="Banner" />
                                 </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                     {/* <div className="carousel-item active">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="banner_taital_main">
                                 <h1 className="banner_taital">We Provide Law Practice</h1>
                                 <p className="banner_text">Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem</p>
                                 <div className="readmore_btn active"><a href="#">Read More</a></div>
                                 <div className="started_bt"><a href="#">Contact Us</a></div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="banner_img"><img src="src/assets/images/banner-img.png"/></div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="banner_taital_main">
                                 <h1 className="banner_taital">We Provide Law Practice</h1>
                                 <p className="banner_text">Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem</p>
                                 <div className="readmore_btn active"><a href="#">Read More</a></div>
                                 <div className="started_bt"><a href="#">Contact Us</a></div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="banner_img"><img src="src/assets/images/banner-img.png"/></div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="banner_taital_main">
                                 <h1 className="banner_taital">We Provide Law Practice</h1>
                                 <p className="banner_text">Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem</p>
                                 <div className="readmore_btn active"><a href="#">Read More</a></div>
                                 <div className="started_bt"><a href="#">Contact Us</a></div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="banner_img"><img src="src/assets/images/banner-img.png"/></div>
                           </div>
                        </div>
                     </div> */}
                  </div>
                  <a className="carousel-control-prev" href="#banner_slider" role="button" data-slide="prev">
                  <i className="fa fa-arrow-left"></i>
                  </a>
                  <a className="carousel-control-next" href="#banner_slider" role="button" data-slide="next">
                  <i className="fa fa-arrow-right"></i>
                  </a>
               </div>
            </div>
         </div>
         {/* <!-- banner section end --> */}
      </div>
      {/* <!-- header section end -->
      <!-- box section start --> */}
      <div className="container">
         <div className="box_section">
            <div className="online_box">
               <div className="online_box_left">
                  <div className="online_box_main">
                     <div className="box_left">
                        <div className="right_arrow"><i className="fa fa-arrow-right"></i></div>
                     </div>
                     <div className="box_right">
                        <p className="book_text">Book At</p>
                        <h4 className="appoinment_text">Appoinment</h4>
                     </div>
                  </div>
               </div>
               <div className="online_box_left active">
                  <div className="online_box_main">
                     <div className="box_left">
                        <div className="right_arrow"><i className="fa fa-arrow-right"></i></div>
                     </div>
                     <div className="box_right">
                        <p className="book_text active">Get Free</p>
                        <h4 className="appoinment_text active"> Evalution</h4>
                     </div>
                  </div>
               </div>
               <div className="online_box_left">
                  <div className="online_box_main">
                     <div className="box_left">
                        <div className="right_arrow"><i className="fa fa-arrow-right"></i></div>
                     </div>
                     <div className="box_right">
                        <p className="book_text">Pay Invoice</p>
                        <h4 className="appoinment_text">Online</h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- box section end -->
      <!-- services section start --> */}
      <div className="services_section">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="studies_taital">SERVICE OFFERINGS</h1>
               </div>
            </div>
         </div>
         <div className="services_section_2">
            <div id="main_slider" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="service_box">
                                 <div className="house_icon">
                                    <img src="src/assets/images/icon-1.png" className="image_1"/>
                                    <img src="src/assets/images/icon-4.png" className="image_2"/>
                                 </div>
                                 <h3 className="corporate_text">Corporate Law</h3>
                                 <p className="chunks_text">chunks as necessary, making this the first true generator on the Internet. It uses a dictionary </p>
                                 <div className="readmore_button"><a href="#">Read More</a></div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="service_box active">
                                 <div className="house_icon">
                                    <img src="src/assets/images/icon-5.png" className="image_1"/>
                                    <img src="src/assets/images/icon-5.png" className="image_2"/>
                                 </div>
                                 <h3 className="corporate_text">Employments Law</h3>
                                 <p className="chunks_text">chunks as necessary, making this the first true generator on the Internet. It uses a dictionary </p>
                                 <div className="readmore_button active"><a href="#">Read More</a></div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="service_box">
                                 <div className="house_icon">
                                    <img src="src/assets/images/icon-6.png" className="image_2"/>
                                    <img src="src/assets/images/icon-3.png" className="image_1"/>
                                 </div>
                                 <h3 className="corporate_text">International Law</h3>
                                 <p className="chunks_text">chunks as necessary, making this the first true generator on the Internet. It uses a dictionary </p>
                                 <div className="readmore_button"><a href="#">Read More</a></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="service_box">
                                 <div className="house_icon">
                                    <img src="src/assets/images/icon-1.png" className="image_1"/>
                                    <img src="src/assets/images/icon-4.png" className="image_2"/>
                                 </div>
                                 <h3 className="corporate_text">Corporate Law</h3>
                                 <p className="chunks_text">chunks as necessary, making this the first true generator on the Internet. It uses a dictionary </p>
                                 <div className="readmore_button"><a href="#">Read More</a></div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="service_box active">
                                 <div className="house_icon">
                                    <img src="src/assets/images/icon-5.png" className="image_1"/>
                                    <img src="src/assets/images/icon-5.png" className="image_2"/>
                                 </div>
                                 <h3 className="corporate_text">Employments Law</h3>
                                 <p className="chunks_text">chunks as necessary, making this the first true generator on the Internet. It uses a dictionary </p>
                                 <div className="readmore_button active"><a href="#">Read More</a></div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="service_box">
                                 <div className="house_icon">
                                    <img src="src/assets/images/icon-3.png" className="image_1"/>
                                    <img src="src/assets/images/icon-6.png" className="image_2"/>
                                 </div>
                                 <h3 className="corporate_text">International Law</h3>
                                 <p className="chunks_text">chunks as necessary, making this the first true generator on the Internet. It uses a dictionary </p>
                                 <div className="readmore_button"><a href="#">Read More</a></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-4">
                              <div className="service_box">
                                 <div className="house_icon">
                                    <img src="src/assets/images/icon-1.png" className="image_1"/>
                                    <img src="src/assets/images/icon-4.png" className="image_2"/>
                                 </div>
                                 <h3 className="corporate_text">Corporate Law</h3>
                                 <p className="chunks_text">chunks as necessary, making this the first true generator on the Internet. It uses a dictionary </p>
                                 <div className="readmore_button"><a href="#">Read More</a></div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="service_box active">
                                 <div className="house_icon">
                                    <img src="src/assets/images/icon-5.png" className="image_1"/>
                                    <img src="src/assets/images/icon-5.png" className="image_2"/>
                                 </div>
                                 <h3 className="corporate_text">Employments Law</h3>
                                 <p className="chunks_text">chunks as necessary, making this the first true generator on the Internet. It uses a dictionary </p>
                                 <div className="readmore_button active"><a href="#">Read More</a></div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="service_box">
                                 <div className="house_icon">
                                    <img src="src/assets/images/icon-3.png" className="image_1"/>
                                    <img src="src/assets/images/icon-6.png" className="image_2"/>
                                 </div>
                                 <h3 className="corporate_text">International Law</h3>
                                 <p className="chunks_text">chunks as necessary, making this the first true generator on the Internet. It uses a dictionary </p>
                                 <div className="readmore_button"><a href="#">Read More</a></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
               <i className="fa fa-arrow-left"></i>
               </a>
               <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
               <i className="fa fa-arrow-right"></i>
               </a>
            </div>
         </div>
      </div>
      {/* <!-- services section end -->
      <!-- studies section start --> */}
      <div className="studies_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="studies_taital">Recent Case Studies</h1>
               </div>
            </div>
            <div className="studies_section_2">
               <div className="row">
                  <div className="col-md-4">
                     <div className="hover01 column">
                        <figure><img src="src/assets/images/service-img1.png"/></figure>
                     </div>
                     <div className="studies_box">
                        <h3 className="introduction_text">Master of Law, 2010</h3>
                     </div>
                     <div className="read_bt"><a href="#">Read More</a></div>
                  </div>
                  <div className="col-md-4">
                     <div className="hover01 column">
                        <figure><img src="src/assets/images/service-img2.png"/></figure>
                     </div>
                     <div className="studies_box">
                        <h3 className="introduction_text">Master of Law, 2012</h3>
                     </div>
                     <div className="read_bt active"><a href="#">Read More</a></div>
                  </div>
                  <div className="col-md-4">
                     <div className="hover01 column">
                        <figure><img src="src/assets/images/service-img3.png"/></figure>
                     </div>
                     <div className="studies_box">
                        <h3 className="introduction_text">Master of Law, 2014</h3>
                     </div>
                     <div className="read_bt"><a href="#">Read More</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- studies section end -->
      <!-- about section start --> */}
      <div className="about_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="about_img"><img src="src/assets/images/about-img.png"/></div>
               </div>
               <div className="col-md-6">
                  <div className="about_text_main">
                     <h1 className="about_taital">About Us</h1>
                     <p className="about_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                     <div className="readmore_bt"><a href="#">Read More</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- about section end -->
      <!-- testimonial section start --> */}
      <div className="customer_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="customer_taital">SATISFIED CLIENT Says</h1>
               </div>
            </div>
         </div>
         <div id="my_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="customer_section_2">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-12">
                              <div className="box_main">
                                 <div className="customer_main">
                                    <div className="customer_left">
                                       <div className="customer_img"><img src="src/assets/images/customer-img.png"/></div>
                                    </div>
                                    <div className="customer_right">
                                       <h3 className="customer_name">Giolio Mark <span className="quick_icon"><img src="src/assets/images/quick-icon.png"/></span></h3>
                                       <p className="enim_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="customer_section_2">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-12">
                              <div className="box_main">
                                 <div className="customer_main">
                                    <div className="customer_left">
                                       <div className="customer_img"><img src="src/assets/images/customer-img.png"/></div>
                                    </div>
                                    <div className="customer_right">
                                       <h3 className="customer_name">DenoMark <span className="quick_icon"><img src="src/assets/images/quick-icon.png"/></span></h3>
                                       <p className="enim_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="customer_section_2">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-12">
                              <div className="box_main">
                                 <div className="customer_main">
                                    <div className="customer_left">
                                       <div className="customer_img"><img src="src/assets/images/customer-img.png"/></div>
                                    </div>
                                    <div className="customer_right">
                                       <h3 className="customer_name">DenoMark <span className="quick_icon"><img src="src/assets/images/quick-icon.png"/></span></h3>
                                       <p className="enim_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
            <i className="fa fa-arrow-left"></i>
            </a>
            <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
            <i className="fa fa-arrow-right"></i>
            </a>
         </div>
      </div>
      {/* <!-- testimonial section end -->
      <!-- news section start --> */}
      <div className="news_section layout_padding">
         <div className="container">
            <h1 className="news_taital">Recent News</h1>
            <div className="news_section_2">
               <div className="news_box">
                  <div id="custom_slider" className="carousel slide" data-ride="carousel">
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="news_img"><img src="src/assets/images/news-img.png"/></div>
                        </div>
                        <div className="carousel-item">
                           <div className="news_img"><img src="src/assets/images/news-img.png"/></div>
                        </div>
                        <div className="carousel-item">
                           <div className="news_img"><img src="src/assets/images/news-img.png"/></div>
                        </div>
                     </div>
                     <a className="carousel-control-next" href="#custom_slider" role="button" data-slide="next">
                     <i className="fa fa-arrow-right"></i>
                     </a>
                  </div>
                  <h2 className="does_taital">What Does Marijuana Law Mean for You?</h2>
                  <p className="dummy_text">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- news section end -->
      <!-- contact section start --> */}
      <div className="contact_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <h1 className="contact_taital">Free Consulation</h1>
               </div>
            </div>
            <div className="contact_section_2">
               <div className="row">
                  <div className="col-md-12">
                     <div className="mail_section map_form_container">
                        <form action="">
                           <input type="text" className="mail_text" placeholder="Name" name="Name"/>
                           <input type="text" className="mail_text" placeholder="Phone Number" name="Phone Number"/> 
                           <input type="text" className="mail_text" placeholder="Your Email" name="Your Email"/>
                           <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"/>
                           <div className="send_bt active"><a href="#">Send Now</a></div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- contact section end --> */}
      {/* <!-- footer section start --> */}
      <div className="footer_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="location_text">
                     <ul>
                        <li>
                           <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i></a>
                        </li>
                        <li>
                           <a href="#"><i className="fa fa-phone" aria-hidden="true"></i></a>
                        </li>
                        <li>
                           <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="footer_logo">
                  <a href="indexz.html"/>
                     <img src="src/assets/images/logo.png"/>
               </div>
               <div className="social_icon">
               <ul>
               <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
               <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
               <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
               </ul>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- footer section end -->
      <!-- copyright section start --> */}
      <div className="copyright_section">
         <div className="container">
            <p className="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free Html Templates</a></p>
         </div>
      </div>
      {/* <!-- copyright section end -->
      <!-- Javascript files--> */}
      <script src="js/jquery.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/jquery-3.0.0.min.js"></script>
      <script src="js/plugin.js"></script>
      {/* <!-- sidebar --> */}
      <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="js/custom.js"></script>
      {/* <!-- javascript -->  */}

    </>
    )
}

export default Home;