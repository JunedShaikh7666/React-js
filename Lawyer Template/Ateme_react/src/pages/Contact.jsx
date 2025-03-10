import 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Contact() {
  return (
<div className="">
    <Header />
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
                        <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                        <div className="send_bt active"><a href="#">Send Now</a></div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    <Footer />
    </div>  )
}

export default Contact