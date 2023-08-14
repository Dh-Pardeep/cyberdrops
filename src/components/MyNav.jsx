import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Logo from '../assets/img/svg/Logo.svg'
import { Link } from 'react-router-dom';
import { Boaticon, Discordicon, Micon, Twittericon } from './Icon';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const MyNav = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  if (showNavbar) {
    document.body.classList.remove('overflow-hidden');
  } else {
    document.body.classList.add('overflow-hidden')
  }
  return (
    <>
      <section className='position-fixed top-0 w-100 z_1000 bg-black'>
        <div className='mycontainer'>
          <nav className='d-flex justify-content-between align-items-center  py-1'>
            <img className='Logo_w_h c_pointer' src={Logo} alt="Log" />
            <ul className={`${showNavbar ? 'd-flex align-items-center mb-0 nav_sm p-0' : 'd-flex align-items-center mb-0 nav_sm nav_show p-0'} `}>
              <li><Link onClick={() => setShowNavbar(true)} className='active color_orange ff_lato fs_xs fw-normal  nav_hover position-relative d-inline-block' to="/">Home</Link></li>
              <li><Link onClick={() => setShowNavbar(true)} className='ms-lg-4 mt-lg-0 mt-3 d-inline-block  ff_lato fs_xs fw-normal color_white nav_hover position-relative 'to="/about">About</Link></li>
              <li><Link onClick={() => setShowNavbar(true)} className='ms-lg-4 mt-lg-0 mt-3 d-inline-block  ff_lato fs_xs fw-normal color_white nav_hover position-relative' to="/Team">Team</Link></li>
              <li><Link onClick={() => setShowNavbar(true)} className='ms-lg-4 mt-lg-0 mt-3 d-inline-block  ff_lato fs_xs fw-normal color_white nav_hover position-relative' to="/Roadmap">Roadmap</Link></li>
              <li><Link onClick={() => setShowNavbar(true)} className='ms-lg-4 mt-lg-0 mt-3 d-inline-block  ff_lato fs_xs fw-normal color_white nav_hover position-relative' to="/Partners">Partners</Link></li>
              <li><a onClick={() => setShowNavbar(true)} href="https://www.boat-lifestyle.com/" target='_blank' className='mt-lg-0 mt-4 ms-lg-4 ps-lg-1 d-inline-block c_pointer'><Boaticon /></a></li>
              <li><a onClick={() => setShowNavbar(true)} href="https://discord.com/" className='mt-lg-0 mt-4 ms-lg-2 ps-lg-1  d-inline-block c_pointer' target='_blank'><Discordicon /></a></li>
              <li><a onClick={() => setShowNavbar(true)} href="https://twitter.com/" className='mt-lg-0 mt-4 ms-lg-2 ps-lg-1  d-inline-block c_pointer' target='_blank'><Twittericon /></a></li>
              <li><a onClick={() => setShowNavbar(true)} href="https://www.google.com/" className='mt-lg-0 mt-4 ms-lg-2 ps-lg-1  d-inline-block c_pointer' target='_blank'><Micon /></a></li>
              <li><Link onClick={() => setShowNavbar(true)} className='ms-lg-4 ff_lato fs_xs fw-normal color_white common_btn d-inline-block mt-lg-0 mt-3'>Connect Wallet</Link></li>
              <span title="close" className="ms-4 close_nav text-white fw-bold d-lg-none" onClick={() => setShowNavbar(true)}><RxCross2 fontSize={40} /></span>
            </ul>
            <ul className='d-flex gap-sm-4 gap-2 gap-md-5 ps-0 d-lg-none mb-0 '>
              <li><a onClick={() => setShowNavbar(true)} href="https://www.boat-lifestyle.com/" target='_blank' className='  d-inline-block c_pointer'><Boaticon /></a></li>
              <li><a onClick={() => setShowNavbar(true)} href="https://discord.com/" className='   d-inline-block c_pointer' target='_blank'><Discordicon /></a></li>
              <li><a onClick={() => setShowNavbar(true)} href="https://twitter.com/" className='  d-inline-block c_pointer' target='_blank'><Twittericon /></a></li>
              <li><a onClick={() => setShowNavbar(true)} href="https://www.google.com/" className='  d-inline-block c_pointer' target='_blank'><Micon /></a></li>
            </ul>
            <span title="open"
              className="d-inline d-lg-none fw-bold text-white"
              onClick={() => setShowNavbar(false)}>
              <RxHamburgerMenu fontSize={40} /></span>
          </nav>
        </div>
      </section>
    </>
  )
}

export default MyNav