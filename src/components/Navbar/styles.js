import styled from 'styled-components'

const Header = styled.header`
	background-color: #000;
	color: #fff;
	height: 54px;
	display: flex;
	justify-content: space-between;

	@media screen and (min-width: 768px) { 
	   height: 85px;
	   padding: 0 25px;
	  }

`

const LogoContainer = styled.div`
	width: 120px;

	@media screen and (min-width: 768px) { 
		width: 200px;
	  }
`

const Logo = styled.a`
	display: block;
	background: no-repeat center/80% url('https://e-cdns-files.dzcdn.net/cache/slash/images/common/logos/deezer_light@2x.42c19aa510b2b0115b9b873ff5c73dd1.png');
	cursor: pointer;
	width: 100%;
	height: 100%;	
`

const LoginLink = styled.a`
	display: flex;
	align-items: center;
	padding: 0 30px;
	font-size: 1rem;
	color: #fff;
	text-decoration: none;

	&:hover{
		color: #4481dc;
	}

	@media screen and (min-width: 768px) { 
	   padding: 0 25px;
	   font-size: 1.2rem;
	  }
`

export { Header, LogoContainer, Logo, LoginLink }