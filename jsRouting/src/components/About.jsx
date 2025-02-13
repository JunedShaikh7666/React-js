import  'react'
import './about.css';

function About() {
  return (
    
    <div className="About">
      <header>
        <div className="logo">
          <h1>My Website</h1>
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="about-info">
          <h2>About Us</h2>
          <p>Welcome to the About page! Learn more about what we do here.</p>
          <p>We are a passionate team dedicated to bringing you the best content and experiences online. Our goal is to make the web a better place by creating user-friendly websites and beautiful designs.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
    
    
  )
}

export default About