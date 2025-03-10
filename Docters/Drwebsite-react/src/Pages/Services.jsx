import 'react'
import { facility } from '../Constrant/data'

function Services() {
  return (
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
  )
}

export default Services