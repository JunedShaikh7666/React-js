import 'react'
import { homeBanners } from '../Constrant/data'

function Docters() {
  return (
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
	)
}

export default Docters