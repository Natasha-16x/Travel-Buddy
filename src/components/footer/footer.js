import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-3">
        <div className="row">
          <div className="col text-center">
            <h3>Contact Us</h3>
            <h4>Natasha</h4>
            <h4>Wannisa</h4>
            <h4>Ikenna</h4>
            <h4>Phillip</h4>
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x mx-3"></i>
            </a>
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
