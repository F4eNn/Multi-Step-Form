import styled from 'styled-components'
import { ButtonsPanel } from './StepsForm/ButtonsPanel/ButtonsPanel'
import { ReactElement } from 'react'

const ContainerContent = styled.div``

const Card = styled.div`
	margin-inline: auto;
	position: relative;
	top: -45px;
	width: 90%;
	padding: 2rem 1.5rem;
	border-radius: 10px;
	font-size: clamp(1.05em, 2.5vw, 1.5em);
	background-color: var(--white);
	@media (min-width: 768px) {
		top: 0;
		width: 475px;
	}
`
type ContentProps = {
	step: ReactElement
	next: () => void
	back: () => void
	isFirstStep: boolean
	isLastStep: boolean
	firstStepIsValid: boolean
	currentStepIndex: number
}

export const Content = ({
	step,
	back,
	next,
	isFirstStep,
	isLastStep,
	firstStepIsValid,
	currentStepIndex,
}: ContentProps) => {
	const hideButtons = currentStepIndex === 4
	return (
		<ContainerContent>
			<Card>{step}</Card>

			{!hideButtons && (
				<ButtonsPanel
					firstStepIsValid={firstStepIsValid}
					isLastStep={isLastStep}
					isFirstStep={isFirstStep}
					back={back}
					next={next}
				/>
			)}
		</ContainerContent>
	)
}
