import '../styles/components/_footer.scss'
import logo from '../assets/logo_kasa_white.png'
import React from 'react'

const Footer = () => {
	return (
		<footer className='footer'>
			<img src={logo} alt="logo Kasa" />
			<p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}

export default Footer