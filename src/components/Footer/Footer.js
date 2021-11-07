import { FooterContainer, FooterNav, FooterBrand, FooterLinks, FooterList, FooterListLink, FooterListTitle, FooterListItem, FooterSocial, FooterSocialList, FooterSocialItem, FooterSocialLink, FooterLegal }   from './styles'

const Footer = () => {

	return (

		<FooterContainer>
			<FooterNav>
				<FooterBrand>
					<a href="https://deezer.com">
						<img src="https://e-cdns-files.dzcdn.net/cache/slash/images/common/logos/deezer_light@2x.42c19aa510b2b0115b9b873ff5c73dd1.png" alt="Logo"/>
					</a>
				</FooterBrand>

				<FooterLinks>

					<FooterList>
						<FooterListTitle>Empresa</FooterListTitle>
						<FooterListItem>
							<FooterListLink href="#">
							Acerca de	
							</FooterListLink>
						</FooterListItem>
						<FooterListItem>
							<FooterListLink href="#">
							Empleo	
							</FooterListLink>
						</FooterListItem>
						<FooterListItem>
							<FooterListLink href="#">
							For the Record	
							</FooterListLink>
						</FooterListItem>
					</FooterList>

					<FooterList>
					<FooterListTitle>Comunidades</FooterListTitle>
					<FooterListItem>
						<FooterListLink href="#">
						Para artistas
						</FooterListLink>
					</FooterListItem>
					<FooterListItem>
						<FooterListLink href="#">
						Desarrolladores	
						</FooterListLink>
					</FooterListItem>
					<FooterListItem>
						<FooterListLink href="#">
						Publicidad
						</FooterListLink>
					</FooterListItem>
					<FooterListItem>
						<FooterListLink href="#">
						Inversores
						</FooterListLink>
					</FooterListItem>
					<FooterListItem>
						<FooterListLink href="#">
						Proveedores
						</FooterListLink>
					</FooterListItem>
					</FooterList>

					<FooterList>
					<FooterListTitle>Enlaces útiles</FooterListTitle>
					<FooterListItem>
						<FooterListLink href="#">
						Asistencia	
						</FooterListLink>
					</FooterListItem>
					<FooterListItem>
						<FooterListLink href="#">
						Reproductor web
						</FooterListLink>
					</FooterListItem>
					<FooterListItem>
						<FooterListLink href="#">
						App gratis para móvil
						</FooterListLink>
					</FooterListItem>
					</FooterList>
				</FooterLinks>

				<FooterSocial>
					<FooterSocialList>
						<FooterSocialItem>
							<FooterSocialLink href="https://instagram.com">
								<i className="fab fa-instagram"></i>
							</FooterSocialLink>
						</FooterSocialItem>
						<FooterSocialItem>
							<FooterSocialLink href="https://facebook.com">
								<i className="fab fa-facebook"></i>
							</FooterSocialLink>
						</FooterSocialItem>
						<FooterSocialItem>
							<FooterSocialLink href="https://twitter.com">
								<i className="fab fa-twitter"></i>
							</FooterSocialLink>
						</FooterSocialItem>
					</FooterSocialList>
				</FooterSocial>
				<FooterLegal>
					<small>
						Sitio desarrollado con fines pedagógicos, sin intenciones de violar derechos de autor.
						Todos los derechos de imagen, marca, y logotipo pertenecen a la empresa responsable.
						<br/>
						<br/>
						Venezuela, 2021 <a href="https://github.com/jesusaviladev">@jesusaviladev</a>
					</small>
				</FooterLegal>
			</FooterNav>
		</FooterContainer>

		);
}

export default Footer