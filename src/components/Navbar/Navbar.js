import { Header, LogoContainer, Logo, LoginLink } from './styles.js'

const Navbar = () => {

	return (

		<Header>
			<LogoContainer>
				<Logo href="https://deezer.com" target="_vblank"></Logo>
			</LogoContainer>

			<LoginLink href="#">Inicia sesión</LoginLink>
		</Header>

		);
}

export default Navbar