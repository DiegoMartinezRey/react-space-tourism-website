import styled from 'styled-components';

const StyledHomePage = styled.div`
	width: 100%;
	height: 100vh;
	padding-top: 96px;
	background-image: url('/public/assets/home/background-home-mobile.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 119px;
`;

const StyledTextHomeContainer = styled.div`
	padding: 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;
	text-align: center;
`;

const StyledExploreButton = styled.button`
	border-radius: 50%;
	width: 144px;
	height: 144px;
	border: 1px solid white;
	outline: 1px solid rgba(255, 255, 255, 0.4);
	transition: outline 0.3s ease;
	color: #0b0d17;

	@media (hover: hover) {
		&:hover {
			outline: 44px solid rgba(255, 255, 255, 0.4);
			cursor: pointer;
		}
	}
`;

export { StyledExploreButton, StyledHomePage, StyledTextHomeContainer };
