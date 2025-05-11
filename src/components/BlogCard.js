import React from 'react';
import './BlogCard.css';

function BlogCard({ blog }) {
  const handleClick = () => {
    window.open(blog.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="blog-card" onClick={handleClick}>
      <h3 className="blog-title">{blog.title}</h3>
      <p className="blog-description">{blog.description}</p>
      <div className="blog-meta">
        <span className="blog-date">{blog.date}</span>
        <span className="blog-read-time">{blog.readTime}</span>
      </div>
    </div>
  );
}

export default BlogCard; 