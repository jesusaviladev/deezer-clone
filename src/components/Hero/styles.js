import styled from 'styled-components'

const HeroContainer = styled.section`
	background: linear-gradient(176.06deg, #b84fdd -26.76%, #4965f4 44.6%, #2efb74 132.54%);
	height: 100vh;
	overflow: hidden;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const HeroTitle = styled.h1`
	font-size: 48px;
	margin: 0;
	padding-bottom: 20px;
	width: 270px;
	color: #eee;

	@media screen and (min-width: 550px) {
		font-size: 100px;
		width: 600px;
	}

	@media screen and (min-width: 768px) {
		font-size: 156px;
		width: 744px;
	}
`

const HeroText = styled.p`
	font-size: 1.2rem;
	margin: 0 20px;
	padding-bottom: 40px;
`

const HeroButton = styled.a`
	background-color: #000;
	border-radius: 500px;
    padding: 14px 32px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;

    &:hover{
    	background-color: #eee;
    	color: #000;
    }
`
const HeroCredits = styled.span`
	padding: 20px 0;
	font-weight: 500;
`


export { HeroContainer, HeroTitle, HeroText, HeroButton, HeroCredits }