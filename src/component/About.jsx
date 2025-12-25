import React, { useEffect, useState, useRef } from 'react'
import './About.css'
import logo from '../assets/about-logo.png'
import Footer from './Footer'

const About = () => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const [isBlackAgain, setIsBlackAgain] = useState(false);
  const logoRef = useRef(null);
  const contentRef = useRef(null);
  const approachRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {

      if (contentRef.current) {
        const contentRect = contentRef.current.getBoundingClientRect();

        if (contentRect.top <= window.innerHeight + 100) {
           setIsScrolledPast(true);
        } else {
           setIsScrolledPast(false);
        }
      }

      if (approachRef.current) {
        const approachRect = approachRef.current.getBoundingClientRect();

        if (approachRect.bottom <= window.innerHeight / 2) {
          setIsBlackAgain(true);
        } else {
          setIsBlackAgain(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBackgroundClass = () => {
    if (isBlackAgain) return 'black-bg';
    if (isScrolledPast) return 'white-bg';
    return 'black-bg';
  };

  return (
    <>
    <div className={`about-container ${getBackgroundClass()}`}>
      <div className="about-hero">
        <h1 className="about-title">ABOUT ATECHSOLE</h1>
        <p className="about-description">
          <b>12+ Years Experience</b><br/><br/>
          ATechSole is a global platform dedicated to empowering businesses with cutting-edge technology solutions. 
          Founded with the vision of bridging the gap between digital potential and market leadership, 
          ATechSole serves as a transformative partner where innovation meets execution.
        </p>
        <div className="scroll-indicator">
            <span>scroll</span>
            <div className="scroll-line"></div>
        </div>
      </div>
      
      <div className="about-logo-section" ref={logoRef}>
        <img src={logo} alt="ATechSole Logo" className="about-logo" />
      </div>

      <div className="about-content" ref={contentRef}>
         <div className='content-row1'>
          <h1 className='content-header1'>OUR STORY</h1>
          <p>Founded in 2012, ATechSole began as a small team of passionate developers with a vision to transform businesses through technology.
            Over the past 12 years, we have grown into a leading technology solutions provider, serving clients across the globe.
            Our journey has been marked by continuous learning, adaptation to emerging technologies, and an unwavering commitment to client success.
            From our first web development project to implementing complex AI solutions, we have consistently pushed boundaries and delivered exceptional results.
            Today, ATechSole stands as a trusted partner for businesses seeking digital transformation.
            Our team of 50+ experts specializes in various domains, ensuring we can tackle any technological challenge our clients face.
          </p>
         </div>
         <div className="content-row">
            <div className="content-header">
                <span className="section-number">01</span>
                <h2>Our Mission</h2>
            </div>
            <div className="content-text">
                <p>To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.</p>
            </div>
         </div>

         {/* Mission Section - White Background (after transition) */}
         <div className="content-row">
            <div className="content-header">
                <span className="section-number">02</span>
                <h2>Our Vision</h2>
            </div>
            <div className="content-text">
                <p>To be the global leader in providing transformative technology solutions that shape the future of business and society.</p>
            </div>
         </div>

         {/* What We Do Section - White Background */}
         <div className="content-row" ref={approachRef}>
            <div className="content-header">
                <span className="section-number">03</span>
                <h2>Our Approach</h2>
            </div>
            <div className="content-text">
                <p>We believe in a collaborative approach where we work closely with our clients to understand their unique challenges and objectives. Our agile methodology ensures flexibility and rapid delivery while maintaining the highest quality standards.</p>
            </div>
         </div>

         {/* We Believe Section - Black Background */}
         <div className="we-believe-section">
            <div className="believe-icon">

              <img src={logo} alt="Global Unity Icon" className="believe-img" />
            </div>
            <div className="believe-content">
              <h3>WE BELIEVE</h3>
              <p>
                that businesses are not just economic entities — they are the architects of the future. 
                Through immersive digital strategies, robust software engineering, and global technological integration, 
                ATechSole equips enterprises with essential tools in innovation, scalability, market leadership, and digital resilience.
              </p>
            </div>
         </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default About
