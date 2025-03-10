import 'react';
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <>

    <div className="hero_area1">
        <div className="header_section">
            <div className="container-fluid">
                <div className="navbar navbar-expand-lg custom_nav-container ">
                        <NavLink className="navbar-brand" to="/"><span>Neogym</span></NavLink>
                        <button 
                            className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                <ul className="navbar-nav  ">
                                        <li className="nav-item active">
                                        <NavLink className="nav-NavLink" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                        </li>
                                        <li className="nav-item ">
                                        <NavLink className="nav-NavLink" to="/Why"> Why us </NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-NavLink" to="/Trainer"> Trainers</NavLink>
                                        </li>
                                        <li className="nav-item">
                                        <NavLink className="nav-NavLink" to="/Contact"> Contact Us</NavLink>
                                        </li>
                                </ul>
                                <div className="user_option">
                                    <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </>    
  )
}

export default Header