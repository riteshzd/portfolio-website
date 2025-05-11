import './App.css';

function App() {
  return (
    <div className="App">
      <div className="intro-container">
        <div className="intro-text">
          Hi, I'm Ritesh Dash. I'm a software developer passionate about building impactful solutions.
        </div>
        <div className="links-container">
          <a 
            href="https://linkedin.com/in/your-profile" 
            className="portfolio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a 
            href="/blog" 
            className="portfolio-link"
          >
            Blog
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
