import React from 'react';
import './Blog.css';
import Footer from './Footer';

const blogPosts = [
  {
    id: '01',
    date: ' Jan 15, 2025',
    title: 'Top AI Trends Shaping Business in 2025',
    description: 'Explore the latest artificial intelligence trends that are revolutionizing how businesses operate and compete in the digital landscape.',
    tag: ' Tech Team',
    image: 'https://plus.unsplash.com/premium_vector-1725372199832-32fef84e123b?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: '02',
    date: ' Jan 10, 2025',
    title: 'Essential Cybersecurity Practices for SMBs',
    description: 'Learn how small and medium businesses can protect themselves from cyber threats with practical security measures.',
    tag: 'Security Team',
    image: 'https://plus.unsplash.com/premium_vector-1682310920702-50669014da8f?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  },
  {
    id: '03',
    date: 'Jan 5, 2025',
    title: 'Cloud Migration: A Step-by-Step Guide',
    description: 'Comprehensive guide to successfully migrating your business infrastructure to the cloud with minimal disruption.',
    tag: ' Cloud Team',
    image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: '04',
    date: ' Dec 28, 2024',
    title: 'Modern Web Development Best Practices',
    description: 'Discover the latest web development techniques and best practices for building scalable applications',
    tag: 'Dev Team',
    image: 'https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwd2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: '05',
    date: 'Dec 20, 2024',
    title: 'Cross-Platform vs Native Mobile Development',
    description: 'Understanding the pros and cons of different mobile development approaches for your business needs.',
    tag: ' Mobile Team',
    image: 'https://plus.unsplash.com/premium_vector-1727448490518-477e95ae1ca3?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
  },
  {
    id: '06',
    date: ' Dec 15, 2024',
    title: 'Implementing DevOps for Faster Delivery',
    description: 'How DevOps practices can accelerate your software delivery while maintaining quality and reliability.',
    tag: 'DevOps Team',
    image: 'https://images.unsplash.com/photo-1667372335937-d03be6fb0a9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2b3BzfGVufDB8fDB8fHww'
  }
];

const Blog = () => {
  return (
    <>
    <div className="blog-container">
      <div className='blog-intro'>
        <h1> Blog</h1>
        <p>Stay updated with technology trends and industry insights</p>
      </div>
      <div className="blog-header">
        <h1>Latest Updates</h1>
        <p>Explore our insights on technology and development</p>
      </div>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div 
            key={post.id} 
            className="blog-card-wrapper" 
            style={{ animationDelay: `${0.3 + index * 0.15}s` }}
          >
            <span className="card-number">{post.id}</span>
            <div className="blog-card">
              <div className="card-bg" style={{ backgroundImage: `url(${post.image})` }}></div>
              <div className="card-overlay"></div>
              
              <div className="card-date">{post.date}</div>
              
              <div className="card-content">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <span className="card-tag">{post.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Blog;
