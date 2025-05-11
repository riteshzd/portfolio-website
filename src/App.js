import './App.css';

function App() {
  return (
    <div className="App">
      <div className="intro-container">
        <h1 className="name-heading">
          Ritesh Dash
        </h1>
        <div className="intro-text">
          Things are moving very fast in the world of AI. AI comes with its own set of challenges and opportunities. 
        </div>
        <div className="links-container">
          <a 
            href="/blog" 
            className="portfolio-link"
          >
            Blog
          </a>
          <a 
            href="https://www.linkedin.com/in/riteshzd/" 
            className="portfolio-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
