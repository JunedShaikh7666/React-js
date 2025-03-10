import 'react'
import Header from '../components/Header';
// import { Link } from 'react-router-dom';


function Trainer() {
  return (
  <>
    <div>

      <Header />

        <section className="trainer_section layout_padding">
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
                <a href=""><img src="src/assets/images/facebook-logo.png" alt=""/></a>
                <a href=""><img src="src/assets/images/twitter.png" alt=""/></a>
                <a href=""><img src="src/assets/images/instagram-logo.png" alt=""/></a>
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
                <a href="">
                  <img src="src/assets/images/facebook-logo.png" alt=""/>
                </a>
                <a href="">
                  <img src="src/assets/images/twitter.png" alt=""/>
                </a>
                <a href="">
                  <img src="src/assets/images/instagram-logo.png" alt=""/>
                </a>
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
                <a href="">
                  <img src="src/assets/images/facebook-logo.png" alt=""/>
                </a>
                <a href="">
                  <img src="src/assets/images/twitter.png" alt=""/>
                </a>
                <a href="">
                  <img src="src/assets/images/instagram-logo.png" alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </section>

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

        <footer className="container-fluid footer_section">
        <p>
          &copy; 2025 All Rights Reserved. Design by
          <a href="https://html.design/">Free Html Templates</a>
        </p>
        </footer>
    </div>
  </>
)
}

export default Trainer;