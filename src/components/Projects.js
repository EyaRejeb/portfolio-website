import React, { useState } from 'react';
import DesignProjects from './DesignProjects';
import DataScienceProjects from './DataScienceProjects';
// You can add a similar component for Web projects if needed.
// import WebProjects from './WebProjects';

function Projects() {
  const [activeTab, setActiveTab] = useState('design');

  return (
    <section className="projects-section">
      <h1>Projects</h1>
      {/* Tab Navigation */}
      <div className="tabs">
        <button
          className={activeTab === 'design' ? 'active' : ''}
          onClick={() => setActiveTab('design')}
        >
          Design
        </button>
        <button
          className={activeTab === 'web' ? 'active' : ''}
          onClick={() => setActiveTab('web')}
        >
          Web
        </button>
        <button
          className={activeTab === 'data' ? 'active' : ''}
          onClick={() => setActiveTab('data')}
        >
          Data Science
        </button>
      </div>

      {/* Conditional Rendering Based on Active Tab */}
      {activeTab === 'design' && <DesignProjects />}
      {activeTab === 'web' && (
        // Replace this with your Web projects component when available
        <div style={{ textAlign: 'center', padding: '2rem', color: '#777' }}>
          Web Projects Coming Soon!
        </div>
      )}
      {activeTab === 'data' && <DataScienceProjects />}
    </section>
  );
}

export default Projects;
