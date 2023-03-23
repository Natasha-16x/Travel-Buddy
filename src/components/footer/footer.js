import React from 'react';
import './footer.css'

// added function to create footer 
// added links to github accounts 
function Footer() {
  return (
    <footer className="bg-dark text-white bottom">
      <div className="container py-3">
        <div className="row">
          <div className="col text-center">
            <h3>Contact Us</h3>
            <div className="links-container">
            <a href="https://github.com/Natasha-16x" className="link">Natasha</a>
            <a href="https://github.com/lisaevermore" className="link">Wannisa</a>
            <a href="https://github.com/Iy-ke" className="link">Ikenna</a>
            <a href="https://github.com/phil13131" className="link">Phillip</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p>&copy; 2023 Travel Buddy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
