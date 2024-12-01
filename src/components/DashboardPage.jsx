import React from "react";
import "./DashboardPage.css";


const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">KEDBOG</div>
        <nav className="sidebar-nav">
          <ul>
            <li>Main</li>
            <li>Playground</li>
            <li>Reports</li>
            <li>Exports</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="dashboard-header">
          <input
            type="text"
            placeholder="Search workflows..."
            className="search-bar"
          />
          <div className="profile-section">
            <img src= "p.png" alt="John Doe" className="profile-img" />
            <span className="profile-name">John Doe</span>
            <i className="fas fa-caret-up profile-caret"></i> 
          </div>
        </header>

        {/* Workflows Section */}
        <section className="workflows-section">
          <div className="section-header">
            <h2>My Workflows</h2>
            <button className="new-file-btn">New file</button>
          </div>
          <div className="workflow-cards">
            {/* Workflow Card 1 */}
            <div className="workflow-card">
              <img
                src="da.jpg"
                alt="Data Analytics Pipeline"
                className="workflow-img"
              />
              <h3>Data Analytics Pipeline</h3>
              <p>
                Automated data processing workflow for analytics and reporting
                with real-time updates.
              </p>
              <span className="status active">Active</span>
            </div>

            {/* Workflow Card 2 */}
            <div className="workflow-card">
              <img
                src="dr.jpg"
                alt="ML Model Training"
                className="workflow-img"
              />
              <h3>ML Model Training</h3>
              <p>
                End-to-end machine learning model training pipeline with
                automated validation.
              </p>
              <span className="status in-progress">In Progress</span>
            </div>

            {/* Workflow Card 3 */}
            <div className="workflow-card">
              <img
                src="db.jpg"
                alt="Cloud Deployment"
                className="workflow-img"
              />
              <h3>Cloud Deployment</h3>
              <p>
                Automated cloud infrastructure deployment and scaling workflow.
              </p>
              <span className="status scheduled">Scheduled</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
