import 'react';
import './home.css';

function Home() {
  return (
    <>
    <div className="App">
      <header>
        <div className="logo">
          <h1><a href="App">My Website</a></h1>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="About">About</a></li>
            <li><a href="Dashboard">Dashboard</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="welcome">
          <h2>Welcome to My Website!</h2>
          <p>Here, you can explore beautiful designs and content!</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}

export default Home