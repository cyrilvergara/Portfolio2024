//Portfolio | Cyril Vergara | 301324609 | January 28, 2024
import Switch from 'react-switch';
import './header.css';
import { useTheme } from '../../context/useTheme';
import { useState } from 'react';

const Header = () => {
	const { isDarkTheme, toggleTheme } = useTheme();
	const [isMobileMenuOpen, setISMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setISMobileMenuOpen(!isMobileMenuOpen);
	};
	return (
		<div className={`nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
			{/* BLOCK ELEMENT MODIFIER */}
			<div className='nav__wrapper container'>
				<div className='nav__logo'> <a href="#">Cyril Vergara</a></div>
				<ul className={`nav__menu ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
					<li className='nav__menu-items'>
						<a href='#'>Home</a>
					</li>
					<li className='nav__menu-items'>
						<a href='#about'>About</a>
					</li>
					<li className='nav__menu-items'>
						<a href='#services'>Services</a>
					</li>
					<li className='nav__menu-items'>
						<a href='#projects'>Projects</a>
					</li>
					<li className='nav__menu-items'>
						<a href='#contact'>Contact</a>
					</li>
					<li className='buttons'>
						<label htmlFor='' className='switch'>
							<Switch
								height={24}
								width={48}
								onColor='#4D4D4D'
								offColor='#ccc'
								onChange={toggleTheme}
								checked={isDarkTheme}
							/>
						</label>
						<a href='https://www.linkedin.com/in/cyvergara/' className='button'>
							LinkedIn
						</a>
					</li>
				</ul>
			</div>
			<div className='hamburger-menu' onClick={toggleMobileMenu}>
				<div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
				<div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
				<div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
			</div>
		</div>
	);
};

export default Header;