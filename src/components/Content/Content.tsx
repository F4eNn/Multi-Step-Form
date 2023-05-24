import styled from 'styled-components'
import { PersonalData } from './StepsForm/PersonalData/PersonalData'
import { ButtonsPanel } from './StepsForm/ButtonsPanel/ButtonsPanel'



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

export const Content = () => {

    
	const test = (callback: () => void) => {
		callback()
	}

	return (
		<ContainerContent>
			<Card>
				<PersonalData />
			</Card>
			<ButtonsPanel />
		</ContainerContent>
	)
}
