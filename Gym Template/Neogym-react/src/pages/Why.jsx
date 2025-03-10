import "react";
import Header from "../components/Header";
// import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Why (){
    return(
        <>
        <Header/>
    <div className="sub_page"> 

        {/* <!-- Us section --> */}

        <section className="us_section layout_padding">
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
                        <img src="src/assets/images/u-1.png" alt=""/>
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
                        <img src="src/assets/images/u-4.png" alt=""/>
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
                        <img src="src/assets/images/u-2.png" alt=""/>
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
                        <img src="src/assets/images/u-3.png" alt=""/>
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
        </section>

        {/* <!-- end us section --> */}


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

        {/* <!-- end info_section --> */}

        {/* <!-- footer section --> */}
        <footer className="container-fluid footer_section">
            <p>
            &copy; 2020 All Rights Reserved. Design by
            <a href="https://html.design/">Free Html Templates</a>
            </p>
        </footer>
        {/* <!-- footer section --> */}

        <script src="js/jquery-3.4.1.min.js"></script>
        <script src="js/bootstrap.js"></script>

    </div>
        </>
    )
}

export default Why;