import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs';
import Header from './components/Header';

function Home() {
  return (
    <div className="App">
      <Header />
      <div className="intro-container">
        <div className="intro-text">
          Things are moving very fast in the world of AI. AI comes with its own set of challenges and opportunities. 
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/essays" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;
