import React from 'react'
import { Link } from 'react-router-dom'

import LogoDark from '../images/brand_logo.png'
import LogoLight from '../images/logo-light.png'

const Header = () => {
  function toggleMenu() {
    document.getElementById('isToggle').classList.toggle('open');
    var isOpen = document.getElementById('navigation')
    if (isOpen.style.display === "block") {
        isOpen.style.display = "none";
    } else {
        isOpen.style.display = "block";
    }
}

  return (
    <header id="topnav" className="defaultscroll sticky">
      <div className="container">
        <Link to={'/'} className="logo">
          <img src={LogoDark} height="24" className="logo-light-mode" alt="" />
          <img src={LogoLight} height="24" className="logo-dark-mode" alt="" />
        </Link>

        <div className="menu-extras">
          <div className="menu-item">
            <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>

        <ul className="buy-button list-inline mb-0">
          <li className="list-inline-item mb-0">
            <Link to={'/'} className="btn btn-contact">Hubungi Kami</Link>
          </li>
        </ul>

        <div id="navigation">
          <ul className="navigation-menu">
            <li><a href='#company' className="sub-menu-item">Company</a></li>
            <li><a href='#services' className="sub-menu-item">Layanan</a></li>
            <li><a href='#study-case' className="sub-menu-item">Studi Kasus</a></li>
            <li><a href='#data-center' className="sub-menu-item">Studi Data Center</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header