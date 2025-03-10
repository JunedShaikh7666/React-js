import  'react';
import Header from '../components/Header';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Contact() {
  return (
  <>
  <Header />
  <div>
      

      <section className="contact_section ">
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
      </section>

      {/* <!-- end contact section --> */}
      {/* <!-- info section --> */}
    
      <section className="info_section layout_padding2">
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
      </section>

      {/* <!-- end info_section -->
      <!-- footer section --> */}

      <footer className="container-fluid footer_section">
        <p>
          &copy; 2025 All Rights Reserved. Design by
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </footer>
      {/* <!-- footer section --> */}
  
  </div>
  </>
  
  )
}

export default Contact