import React from 'react'
import FooterCyberDrops from '../assets/img/png/FooterCyberDrops.png'
import { Boaticon, Discordicon, Micon, Twittericon } from './Icon'
const MyFooter = () => {
    return (
        <>
            <footer>
                <div className="mycontainer pt-lg-5">
                    <div className='text-center mt-5 pt-md-5'>
                        <img className='transform_scale' src={FooterCyberDrops} alt="" />
                        <h2 className='font_3xl color_orange fw-semibold my-2 ff_lato c_pointer'>Cyber Drops</h2>
                        <p className='mb-0 footepara mx-auto text-center color_white ff_lato'>Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet.</p>
                        <ul className='d-flex justify-content-center gap-3 ps-0  my-4 '>
                            <li><a href="https://www.boat-lifestyle.com/" target='_blank' className='  d-inline-block c_pointer'><Boaticon /></a></li>
                            <li><a href="https://discord.com/" className='   d-inline-block c_pointer' target='_blank'><Discordicon /></a></li>
                            <li><a href="https://twitter.com/" className='  d-inline-block c_pointer' target='_blank'><Twittericon /></a></li>
                            <li><a href="https://www.google.com/" className='  d-inline-block c_pointer' target='_blank'><Micon /></a></li>
                        </ul>
                    </div>
                </div>
                <div className='Footer_line'>
                </div>
                <p className='text-center py-3 mb-0 font_xs color_white fw-normal Copyright  c_pointer'>Copyright By 2022</p>
            </footer>
        </>
    )
}

export default MyFooter