import { useState } from 'react';
import {
	StyledBurgerMenu,
	StyledBurgerMenuContainer,
	StyledLogo,
	StyledNavBar
} from './navBar.styles';

const NavBar = () => {
	const [activeMenu, setActiveMenu] = useState(false);
	return (
		<StyledNavBar>
			<StyledLogo src='/public/assets/shared/logo.svg' alt='Logo' />
			<StyledBurgerMenu
				src={
					activeMenu
						? '/public/assets/shared/icon-close.svg'
						: '/public/assets/shared/icon-hamburger.svg'
				}
				alt='Buerger menu'
				onClick={() => setActiveMenu(!activeMenu)}
			/>
			<StyledBurgerMenuContainer $activeMenu={activeMenu}>
				<h1>ddd</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
					ea nemo magnam accusantium quos porro debitis ullam consectetur
					expedita? Repellendus id non, qui ab sed maxime error. Animi magnam
					quibusdam perspiciatis dolores omnis obcaecati qui ipsam neque cum.
					Corporis nihil eius totam eligendi corrupti dicta. Minima ea animi
					saepe dignissimos?
				</p>
			</StyledBurgerMenuContainer>
		</StyledNavBar>
	);
};

export default NavBar;
