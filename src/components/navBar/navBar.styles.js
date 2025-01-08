import styled from 'styled-components';

const StyledNavBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 24px;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
`;

const StyledLogo = styled.img`
	&:hover {
		cursor: pointer;
	}
`;

const StyledBurgerMenu = styled.img`
	z-index: 20;
	&:hover {
		cursor: pointer;
	}
`;

const StyledBurgerMenuContainer = styled.div`
	padding: 133px 0 0 32px;
	position: absolute;
	top: 0;
	right: ${({ $activeMenu }) => ($activeMenu ? '0' : '-100%')};
	width: 70%;
	opacity: ${({ $activeMenu }) => ($activeMenu ? '1' : '0')};
	height: 100vh;
	background-color: rgba(11, 13, 23, 0.15);
	backdrop-filter: blur(80px);
	z-index: 10;
	transition: all 0.3s ease-in-out;
`;

export {
	StyledBurgerMenu,
	StyledBurgerMenuContainer,
	StyledLogo,
	StyledNavBar
};
