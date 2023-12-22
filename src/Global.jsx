import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	body{
		box-sizing: border-box;
		background: ${({ theme }) => theme.backgroundColor};
		color: ${({ theme }) => theme.textcolor};
	}
	img{
		max-width: 100%;
		display: block;
		filter: ${({ theme }) => theme.grayscale};
	}
	a{
		text-decoration: none;
		color: currentColor;
	}
	button{
		cursor: pointer;
	}
`;
