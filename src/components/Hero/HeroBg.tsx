import styled from 'styled-components'
import heroMobile from '../../../public/bg-sidebar-mobile.svg'
import heroDesktop from '../../../public/bg-sidebar-desktop.svg'

const HeroImg = styled.div`
	background-image: url(${heroMobile.src});
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 2rem 0 5rem;
	@media (min-width: 768px) {
		background-image: url(${heroDesktop.src});
	}
`
const ProgressBar = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-around;
	gap: 20px;
`
const StepBar = styled.div`
	border: 1px solid var(--white);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25px;
	height: 25px;
	color: var(--white);
`

export const HeroBg = () => {
	return (
		<HeroImg>
			<ProgressBar>
				<StepBar>1</StepBar>
				<StepBar>2</StepBar>
				<StepBar>3</StepBar>
				<StepBar>4</StepBar>
			</ProgressBar>
		</HeroImg>
	)
}
