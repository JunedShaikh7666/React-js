import 'react';
import { blog, clients, counter, emergency, facility, features, homeBanners, packages, portfolio, schedulars, services } from '../Constrant/data';

function Home() {
	return (
	<>
    <div className="">
		{/* map is used here  */}
		<div className="slider">
			<div className="hero-slider" >
				{homeBanners.homeBanner.map((item, index)=>(				
						<div className="single-slider" key={index} style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-7">
									<div className="text">
										<h1>{homeBanners.title}</h1>
										<p>{homeBanners.discription}</p>
										<div className="button">
											<a href="#" className="btn">Get Appointment</a>
											<a href="#" className="btn primary">Learn More</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>			
				))}	
			</div>		
		</div>
		{/* map is used here  */}
		<div className="schedule">
			<div className="container">
				<div className="schedule-inner">
					<div className="row">
						{schedulars.schedular.map((item, index)=>(
						<div className="col-lg-4 col-md-6 col-12 " key={index}>
							
								<div className="single-schedule first" >
								<div className="inner">
									<div className="icon">
										<i className={item.icon}></i>
									</div>
									<div className="single-content">
										<span>{item.title}</span>
										<h4>{item.subtitle}</h4>
										<p>{item.info}</p>
										<a href="#">LEARN MORE<i className="fa fa-long-arrow-right"></i></a>
									</div>
								</div>
							</div>						
						</div>
					))}						
					</div>
				</div>
			</div>
		</div>
		{/* map is used here  */}
		<div className="Feautes section">
			<div className="container">
				<div className="row">	{/* map is used here  */}
					<div className="col-lg-12">
						<div className="section-title">
							<h2>{features.heading}</h2>
							<img src="src/assets/img/section-img.png" alt="#" />
							<p>{features.discription}</p>
						</div>
					</div>
				</div>
				<div className="row">	{/* map is used here  */}
					{features.featureContainer.map((item,index)=>(
						<div className="col-lg-4 col-12">
						<div className="single-features">
							<div className="signle-icon">
								<i className={item.icon}></i>
							</div>
							<h3>{item.title}</h3>
							<p>{item.info}</p>
						</div>
					</div>
					))}					
				</div>
			</div>
		</div>
		{/* map is used here  */}
		<div id="fun-facts" className="fun-facts section overlay">
			<div className="container">
				<div className="row"> {/* map is used here  */}
					{counter.counter.map((item,index)=>(
					<div className="col-lg-3 col-md-6 col-12">
						<div className="single-fun">
							<i className={item.icon}></i>
							<div className="content">
								<span className="counter">{item.countNum}</span>
								<p>{item.title}</p>
							</div>
						</div>
					</div>
					))}				
				</div>
			</div>
		</div>
		{/* map is used here  */}
		<div className="why-choose section" >
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h2>{services.heading}</h2>
							<img src="src/assets/img/section-img.png" alt="#"/>
							<p>{services.discription}</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-12">
						
						<div className="choose-left">
							<h3>{services.subtitle}</h3>
							<p>{services.info1}</p>
							<p>{services.info2}</p>
							<div className="row">	{/* map is used here  */}
								{services.serviceList.map((item, index)=>(
								<div className="col-lg-6">
									
										<ul className="list" key={item.index}>
										<li><i className="fa fa-caret-right"></i>{item.point1}</li>
										<li><i className="fa fa-caret-right"></i>{item.point2}</li>
										<li><i className="fa fa-caret-right"></i>{item.point3}</li>
									</ul>
																
								</div>
								))}										
							</div>
						</div>
					
					</div>
					<div className="col-lg-6 col-12">
						
						<div className="choose-right">
							<div className="video-image">
								
								<div className="promo-video">
									<div className="waves-block">
										<div className="waves wave-1"></div>
										<div className="waves wave-2"></div>
										<div className="waves wave-3"></div>
									</div>
								</div>
								
								<a href="https://www.youtube.com/watch?v=RFVXy6CRVR4" className="video video-popup mfp-iframe"><i className="fa fa-play"></i></a>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
		
		<div className="call-action overlay" data-stellar-background-ratio="0.5">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-12">
						<div className="content">
							<h2>{emergency.heading}</h2>
							<p>{emergency.discription}</p>
							<div className="button">
								<a href="#" className="btn">Contact Now</a>
								<a href="#" className="btn second">Learn More<i className="fa fa-long-arrow-right"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* map is used here  */}
		<div className="portfolio section" >
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h2>{portfolio.heading}</h2>
							<img src="src/assets/img/section-img.png" alt="#" />
							<p>{portfolio.discription}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row">
					
						<div className="col-lg-12 col-12">
						<div className="owl-carousel portfolio-slider">		{/* map is used here  */}
							{portfolio.portfolioItem.map((item, index)=>( 
							<div className="single-pf">
								<img src={item.img} alt="#" />
								<a href="portfolio-details.html" className="btn">{portfolio.btn}</a>
							</div>))}							
						</div>
					</div>
					
					
				</div>
			</div>
		</div>
		{/* map is used here  */}
		<div className="services section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h2>{facility.heading}</h2>
							<img src="src/assets/img/section-img.png" alt="#" />
							<p>{facility.discription}</p>
						</div>
					</div>
				</div>
				<div className="row">	{/* map is used here  */}
					{facility.facilityContainer.map((item,index)=>(
						<div className="col-lg-4 col-md-6 col-12">
						<div className="single-service">
							<i className={item.icon}></i>
							<h4><a href="service-details.html">{item.title}</a></h4>
							<p>{item.info}</p>	
						</div>
					</div>
					))}
				</div>
			</div>
		</div>
		{/* map is used here  */}
		<div className="pricing-table section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h2>{packages.heading}</h2>
							<img src="src/assets/img/section-img.png" alt="#" />
							<p>{packages.discription}</p>
						</div>
					</div>
				</div>
				<div className="row">
					
					<div className="col-lg-4 col-md-12 col-12">
						<div className="single-table">
							<div className="table-head">
								<div className="icon">
									<i className="icofont icofont-ui-cut"></i>
								</div>
								<h4 className="title">Plastic Suggery</h4>
								<div className="price">
									<p className="amount">$199<span>/ Per Visit</span></p>
								</div>	
							</div>
							<ul className="table-list">
								<li><i className="icofont icofont-ui-check"></i>Lorem ipsum dolor sit</li>
								<li><i className="icofont icofont-ui-check"></i>Cubitur sollicitudin fentum</li>
								<li className="cross"><i className="icofont icofont-ui-close"></i>Nullam interdum enim</li>
								<li className="cross"><i className="icofont icofont-ui-close"></i>Donec ultricies metus</li>
								<li className="cross"><i className="icofont icofont-ui-close"></i>Pellentesque eget nibh</li>
							</ul>
							<div className="table-bottom">
								<a className="btn" href="#">Book Now</a>
							</div>
						</div>
					</div>
					
					<div className="col-lg-4 col-md-12 col-12">
						<div className="single-table">
							<div className="table-head">
								<div className="icon">
									<i className="icofont icofont-tooth"></i>
								</div>
								<h4 className="title">Teeth Whitening</h4>
								<div className="price">
									<p className="amount">$299<span>/ Per Visit</span></p>
								</div>	
							</div>
							<ul className="table-list">
								<li><i className="icofont icofont-ui-check"></i>Lorem ipsum dolor sit</li>
								<li><i className="icofont icofont-ui-check"></i>Cubitur sollicitudin fentum</li>
								<li><i className="icofont icofont-ui-check"></i>Nullam interdum enim</li>
								<li className="cross"><i className="icofont icofont-ui-close"></i>Donec ultricies metus</li>
								<li className="cross"><i className="icofont icofont-ui-close"></i>Pellentesque eget nibh</li>
							</ul>
							<div className="table-bottom">
								<a className="btn" href="#">Book Now</a>
							</div>
						</div>
					</div>
					
					<div className="col-lg-4 col-md-12 col-12">
						<div className="single-table">
							<div className="table-head">
								<div className="icon">
									<i className="icofont-heart-beat"></i>
								</div>
								<h4 className="title">Heart Suggery</h4>
								<div className="price">
									<p className="amount">$399<span>/ Per Visit</span></p>
								</div>	
							</div>
							<ul className="table-list">
								<li><i className="icofont icofont-ui-check"></i>Lorem ipsum dolor sit</li>
								<li><i className="icofont icofont-ui-check"></i>Cubitur sollicitudin fentum</li>
								<li><i className="icofont icofont-ui-check"></i>Nullam interdum enim</li>
								<li><i className="icofont icofont-ui-check"></i>Donec ultricies metus</li>
								<li><i className="icofont icofont-ui-check"></i>Pellentesque eget nibh</li>
							</ul>
							<div className="table-bottom">
								<a className="btn" href="#">Book Now</a>
							</div>
						</div>
					</div>
				</div>	
			</div>	
		</div>	
		{/* map is used here  */}
		<div className="blog section" id="blog">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h2>{blog.heading}</h2>
							<img src="src/assets/img/section-img.png" alt="#" />
							<p>{blog.discription}</p>
						</div>
					</div>
				</div>
				<div className="row">
					{blog.newsArtical.map((item)=>(
						<div className="col-lg-4 col-md-6 col-12">
						<div className="single-news">
							<div className="news-head">
								<img src={item.img} alt="#" />
							</div>
							<div className="news-body">
								<div className="news-content">
									<div className="date">{item.date}</div>
									<h2><a href="blog-single.html">{blog.title}</a></h2>
									<p className="text">{blog.info}.</p>
								</div>
							</div>
						</div>
					</div>
					))}					
				</div>
			</div>
		</div>
		{/* map is used here  */}
		<div className="clients overlay">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-12">
						<div className="owl-carousel clients-slider">
						{clients.client.map((item)=>(						
							<div className="single-clients">
								<img src={item.img} alt="#"/>
							</div>							
						))}
					</div>
					</div>
				</div>
			</div>
		</div>
		
		<div className="appointment">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title">
							<h2>We Are Always Ready to Help You. Book An Appointment</h2>
							<img src="src/assets/img/section-img.png" alt="#" />
							<p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-12 col-12">
						<form className="form" action="#">
							<div className="appointmentForm">
							<div className="row"> 
								<div className="col-lg-6 col-md-6 col-12">
									<div className="form-group">
										<input name="name" type="text" placeholder="Name"  />
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-12">
									<div className="form-group">
										<input name="email" type="email" placeholder="Email" />
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-12">
									<div className="form-group">
										<input name="phone" type="text" placeholder="Phone" />
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-12">
									<div className="form-group">
										<div className="nice-select form-control wide" tabIndex="0"><span className="current">Department</span>
											<ul className="list">
												<li data-value="1" className="option selected ">Department</li>
												<li data-value="2" className="option">Cardiac Clinic</li>
												<li data-value="3" className="option">Neurology</li>
												<li data-value="4" className="option">Dentistry</li>
												<li data-value="5" className="option">Gastroenterology</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-12">
									<div className="form-group">
										<div className="nice-select form-control wide" tabIndex="0"><span className="current">Doctor</span>
											<ul className="list">
												<li data-value="1" className="option selected ">Doctor</li>
												<li data-value="2" className="option">Dr. Akther Hossain</li>
												<li data-value="3" className="option">Dr. Zara Aziz</li>
												<li data-value="4" className="option">Dr. Ahmat Turkey</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-12">
									<div className="form-group">
										<input type="text" placeholder="Date" id="datepicker" />
									</div>
								</div>
								<div className="col-lg-12 col-md-12 col-12">
									<div className="form-group">
										<textarea name="message" placeholder="Write Your Message Here....."></textarea>
									</div>
								</div>
							</div></div>
							<div className="row">
								<div className="col-lg-5 col-md-4 col-12">
									<div className="form-group">
										<div className="button">
											<button type="submit" className="btn">Book An Appointment</button>
										</div>
									</div>
								</div>
								<div className="col-lg-7 col-md-8 col-12">
									<p>( We will be confirm by an Text Message )</p>
								</div>
							</div>
						</form>
					</div>
					<div className="col-lg-6 col-md-12 ">
						<div className="appointment-image">
							<img src="src/assets/img/contact-img.png" alt="#"/>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div className="newsletter section">
			<div className="container">
				<div className="row ">
					<div className="col-lg-6  col-12">
						
						<div className="subscribe-text ">
							<h6>Sign up for newsletter</h6>
							<p className="">Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,<br/> homero alterum.</p>
						</div>
						
					</div>
					<div className="col-lg-6  col-12">
						
						<div className="subscribe-form ">
							<form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
								<input name="EMAIL" placeholder="Your email address" className="common-input" onFocus="this.placeholder = ''"
									onBlur="this.placeholder = 'Your email address'" required="" type="email"/>
								<button className="btn">Subscribe</button>
							</form>
						</div>
						
					</div>
				</div>
			</div>
		</div>        
    </div>
    </>
  )
}

export default Home