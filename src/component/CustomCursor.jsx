import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {

    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const addHoverEffect = () => {
      if (ringRef.current) ringRef.current.classList.add('hovered');
    };

    const removeHoverEffect = () => {
      if (ringRef.current) ringRef.current.classList.remove('hovered');
    };

    document.addEventListener('mousemove', moveCursor);

    // Add hover effect listeners to clickable elements
    const clickables = document.querySelectorAll('a, button, .clickable');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', addHoverEffect);
      el.addEventListener('mouseleave', removeHoverEffect);
    });

    // Mutation observer to handle dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const newClickables = document.querySelectorAll('a, button, .clickable');
          newClickables.forEach(el => {
            el.removeEventListener('mouseenter', addHoverEffect); // Avoid duplicates
            el.removeEventListener('mouseleave', removeHoverEffect);
            el.addEventListener('mouseenter', addHoverEffect);
            el.addEventListener('mouseleave', removeHoverEffect);
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', addHoverEffect);
        el.removeEventListener('mouseleave', removeHoverEffect);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>
    </>
  );
};

export default CustomCursor;
