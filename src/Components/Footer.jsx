import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer2">
      <div className="footer3">
        <div>
          <h1 className="heading">OTHER LINKS</h1>
        </div>
        <div className="link">
          <a href="">Other events</a><br />
        </div>
        <div className="link_2">
          <a href="">Sponsor us?</a>
        </div>
      </div>
      <hr size="1" />
      <div className="follow">
        <a href=""><i className="fab fa-facebook-f"></i></a>
        <a href=""><i className="fab fa-linkedin-in"></i></a>
        <a href=""><i className="fab fa-instagram"></i></a>
        <a href=""><i className="fab fa-youtube"></i></a>
        <a href=""><i className="fab fa-github"></i></a>
        <a href=""><i className="fas fa-envelope"></i></a>
        <a href=""><i className="fas fa-phone"></i></a>
      </div>
      <div className="copyright">
        <p>©️ 2023 COPYRIGHT: MOZILLA FIREFOX CLUB, VIT</p>
      </div>
    </div>
  );
}

export default Footer;
