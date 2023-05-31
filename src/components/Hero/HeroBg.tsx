import styled from 'styled-components'
import heroMobile from '../../../public/bg-sidebar-mobile.svg'
import heroDesktop from '../../../public/bg-sidebar-desktop.svg'
import { Span } from '../Content/StepsForm/SubscriptionPlan/PlanItem'
import { H2 } from '../Content/StepsForm/SubscriptionPlan/PlanItem'
import { useMediaQuery } from '@react-hook/media-query'
import { useEffect, useState } from 'react'

const HeroImg = styled.div`
	background-image: url(${heroMobile.src});
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 2rem 0 5rem;
	border-radius: 10px;
	@media (min-width: 768px) {
		background-image: url(${heroDesktop.src});
		width: 200px;
	}
`
const ProgressBar = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-around;
	gap: 15px;

	@media (min-width: 768px) {
		flex-direction: column;
		justify-content: flex-start;
		gap: 30px;
	}
`
const StepBar = styled.div`
	border: 1px solid var(--white);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 33px;
	height: 33px;
	color: var(--white);
	transition: background-color 0.3s, color 0.3s, border-color 0.3s;
	&.currentStep {
		background-color: var(--step-color);
		color: var(--primary);
		border-color: var(--step-color);
	}
`
const StepBox = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
`
const StepTitle = styled(H2)`
	color: var(--white);
	text-transform: uppercase;
	font-size: 0.75em;
	letter-spacing: 2px;
`
const StepNumber = styled(Span)`
	color: var(--skye-blue);
	font-size: 0.7em;
`
const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`
export const HeroBg = ({ currentIndex }: { currentIndex: number }) => {
	const matches = useMediaQuery('(min-width: 768px)')
	const [isMatched, setIsMatched] = useState(false)

	useEffect(() => {
		setIsMatched(matches)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [matches])
	return (
		<HeroImg>
			{isMatched && (
				<ProgressBar>
					<StepBox>
						<StepBar className={`${currentIndex === 0 ? 'currentStep' : ''}`}>1</StepBar>
						<StyledDiv>
							<StepNumber>Step 1</StepNumber>
							<StepTitle>Your Info</StepTitle>
						</StyledDiv>
					</StepBox>
					<StepBox>
						<StepBar className={`${currentIndex === 1 ? 'currentStep' : ''}`}>2</StepBar>
						<StyledDiv>
							<StepNumber>Step 2</StepNumber>
							<StepTitle>Select Plan</StepTitle>
						</StyledDiv>
					</StepBox>
					<StepBox>
						<StepBar className={`${currentIndex === 2 ? 'currentStep' : ''}`}>3</StepBar>
						<StyledDiv>
							<StepNumber>Step 3</StepNumber>
							<StepTitle>Add-ons</StepTitle>
						</StyledDiv>
					</StepBox>
					<StepBox>
						<StepBar className={`${currentIndex === 3 || currentIndex === 4 ? 'currentStep' : ''}`}>4</StepBar>
						<StyledDiv>
							<StepNumber>Step 4</StepNumber>
							<StepTitle>summary</StepTitle>
						</StyledDiv>
					</StepBox>
				</ProgressBar>
			)}
			{!isMatched && (
				<ProgressBar>
					<StepBar className={`${currentIndex === 0 ? 'currentStep' : ''}`}>1</StepBar>
					<StepBar className={`${currentIndex === 1 ? 'currentStep' : ''}`}>2</StepBar>
					<StepBar className={`${currentIndex === 2 ? 'currentStep' : ''}`}>3</StepBar>
					<StepBar className={`${currentIndex === 3 || currentIndex === 4 ? 'currentStep' : ''}`}>4</StepBar>
				</ProgressBar>
			)}
		</HeroImg>
	)
}
