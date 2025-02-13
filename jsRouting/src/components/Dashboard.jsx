import 'react';
import './dashboard.css';

function Dashboard() {
  return (
    <>
        <div className="Dashboard">
      <header>
        <div className="logo">
          <h1>My Dashboard</h1>
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="dashboard-overview">
          <h2>Welcome to your Dashboard!</h2>
          <p>Here you can monitor your activity and manage your settings.</p>
        </section>

        <section className="dashboard-stats">
          <div className="stat-box">
            <h3>Active Users</h3>
            <p>102</p>
          </div>
          <div className="stat-box">
            <h3>New Orders</h3>
            <p>25</p>
          </div>
          <div className="stat-box">
            <h3>Revenue</h3>
            <p>1,200,00/-</p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}

export default Dashboard

