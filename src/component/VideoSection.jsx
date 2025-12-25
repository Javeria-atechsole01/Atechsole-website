import React, { useState, useRef } from 'react'
import './VideoSection.css'
import thumbnail from '../assets/image.png'
import videoSource from '../assets/Atechsole.mp4'

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handleClose = () => {
    setIsPlaying(false)
  }

  return (
    <section className="video-section">
      <div className="video-container">
        <div className="thumbnail-wrapper" onClick={handlePlay}>
          <img src={thumbnail} alt="Video Thumbnail" className="video-thumbnail" />
          <div className="play-button">
            <div className="play-icon"></div>
          </div>
        </div>

        {isPlaying && (
          <div className="video-overlay">
            <button className="close-video-btn" onClick={handleClose} aria-label="Close video">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="video-wrapper">
              <video
                ref={videoRef}
                src={videoSource}
                className="fullscreen-video"
                controls
                autoPlay
                playsInline
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default VideoSection
