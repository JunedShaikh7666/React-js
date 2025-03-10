import 'react'

function Footer() {
  return (
    <div className="">
        <div className="footer_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="location_text">
                     <ul>
                        <li>
                           <a href="https://www.google.com/maps"><i className="fa fa-map-marker" aria-hidden="true"></i></a>
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
      
      <div className="copyright_section">
         <div className="container">
            <p className="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free Html Templates</a></p>
         </div>
      </div>
        
    </div>
)
}

export default Footer