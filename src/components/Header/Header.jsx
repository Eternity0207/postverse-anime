import React, { useEffect, useRef } from 'react';
import '../Header/Header.css';

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        headerRef.current.classList.add('scrolled');
      } else {
        headerRef.current.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="header" ref={headerRef}> 
      <h1 className="shop-name" style={{ fontSize: '60px' }}>POSTVERSE</h1>
    </div>
  );
}
