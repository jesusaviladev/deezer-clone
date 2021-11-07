import { HeroContainer, HeroTitle, HeroText, HeroButton, HeroCredits } from './styles.js'

const Hero = () => {

	return (
		<HeroContainer>
			<HeroTitle>Escuchar lo es todo</HeroTitle>
			<HeroText>
				Millones de canciones. Bienvenido al clon de Spotify/Deezer
			</HeroText>
			<HeroButton href="#">
				Inicia sesión con Deezer
			</HeroButton>
			<HeroCredits>
				@jesusaviladev
			</HeroCredits>
		</HeroContainer>
		);
}

export default Hero