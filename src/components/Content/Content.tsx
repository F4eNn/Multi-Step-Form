import styled from 'styled-components'
import { PersonalData } from './StepsForm/PersonalData/PersonalData'
import { ButtonsPanel } from './StepsForm/ButtonsPanel/ButtonsPanel'
import { ReactElement } from 'react'

const ContainerContent = styled.div``

const Card = styled.div`
	margin-inline: auto;
	position: relative;
	top: -50px;
	width: 90%;
	padding: 1.5rem;
	border-radius: 10px;
	font-size: clamp(1em, 2.5vw, 1.5em);
	background-color: var(--white);
`
type ContentProps = {
	renderStep: ReactElement
	nextStepHandler: () => void
	backStepHandler: () => void
}
export const Content = ({ renderStep, nextStepHandler,backStepHandler }: ContentProps) => {
	return (
		<ContainerContent>
			<Card>
				<PersonalData />
				{renderStep}
			</Card>
			<ButtonsPanel backStep={backStepHandler} nextStep={nextStepHandler}/>
		</ContainerContent>
	)
}
