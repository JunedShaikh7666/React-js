import 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function About() {
  return (
    <div className="">
    <Header />
      <div className="about_section layout_padding margin_top90">
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
    <Footer />
    </div>
  )
}

export default About