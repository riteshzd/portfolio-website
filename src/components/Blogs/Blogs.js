import React from 'react';
import BlogCard from './BlogCard';
import Header from '../Header/Header';
import './Blogs.css';

function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "The Future of AI in Healthcare",
      description: "Exploring how artificial intelligence is transforming healthcare delivery and patient care.",
      date: "March 15, 2024",
      readTime: "5 min read",
      url: "https://google.com"
    },
    {
      id: 2,
      title: "Understanding Large Language Models",
      description: "A deep dive into how LLMs work and their impact on natural language processing.",
      date: "March 10, 2024",
      readTime: "8 min read",
      url: "https://youtube.com"
    },
    {
      id: 3,
      title: "AI Ethics and Responsibility",
      description: "Examining the ethical considerations and responsibilities in AI development and deployment.",
      date: "March 5, 2024",
      readTime: "6 min read",
      url: "https://hashnode.com"
    }
  ];

  return (
    <div className="App">
      <Header />
      <div className="blogs-container">
        <div className="blogs-grid">
          {blogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs; 