import styled from 'styled-components'

const FooterContainer = styled.footer`
	background-color: #000;
	color: #eee;
	padding: 50px 0 20px;

	@media screen and (min-width: 1024px) {
		padding: 80px 0 50px;
	}
`
const FooterNav = styled.nav`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 768px){
		flex-wrap: wrap;
		max-width: 750px;
		margin: 0 auto;
	}

	@media screen and (min-width: 1024px){
		max-width: 1170px;
		flex-direction: row;
	}
`

const FooterBrand = styled.div`
	padding: 0 15px;

	& img{
		width: 104px;
		height: 28px;
	}

	@media screen and (min-width: 768px) {

		width: 220px;

		& img {
			width: 158px;
			height: 41px
		}
	}
`

const FooterLinks = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		flex-direction: row;
	}

	@media screen and (min-width: 1024px) {
		width: 48%;
	}
`

const FooterList = styled.dl`
	padding: 0 15px;
	margin: 0;

	@media screen and (min-width: 768px) {
		flex: 1 0;
	}
`

const FooterListTitle = styled.dt`
	margin: 50px 0 22px;
	color: #919496;
	font-size: 12px;
	font-weight: 900;
	line-height: 1.4;
	letter-spacing: .08em;
	text-transform: uppercase;

	@media screen and (min-width: 1024px) {
		margin: 20px 0;
	}
`
const FooterListItem = styled.dd`
	margin: 0;
`

const FooterListLink = styled.a`
	text-decoration: none;
	color: inherit;
	cursor: pointer;
	padding: 3px 0 15px;
	display: inline-block;
	font-weight: 400;
	line-height: 1.5;

	&:hover{
		color: #4481dc;
	}
`

const FooterSocial = styled.div`
	margin-top: 60px;

	@media screen and (min-width: 1024px) {
		margin: 0;
	}
`

const FooterSocialList = styled.ul`
	padding-left: 0;
	margin: 0 auto;
	list-style: none;
	display: flex;
	justify-content: center;

	@media screen and (min-width: 1024px) {
		padding-left: 100px;
	}
`

const FooterSocialItem = styled.li``

const FooterSocialLink = styled.a`
	text-decoration: none;
	color: inherit;
	cursor: pointer;
	display: block;
	padding: 0 20px;
	font-size: 48px;
`

const FooterLegal = styled.div`
	padding: 0 20px;
	margin: 40px 0;
	text-align: center;
`


export { FooterContainer, FooterNav, FooterBrand, FooterLinks, FooterList, FooterListLink, FooterListTitle, FooterListItem, FooterSocial, FooterSocialList, FooterSocialItem, FooterSocialLink, FooterLegal }