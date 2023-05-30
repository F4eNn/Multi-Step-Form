import styled from 'styled-components'

interface StyledButton {
	$primary?: boolean
	bghover?: string
	colorhover?: string
	$reverse?: boolean
}

const ButtonBox = styled.div`
	width: 100%;
	padding: 1.2rem 1.5rem;
	display: flex;
	position: fixed;
	bottom: 0;
	justify-content: space-between;
	background-color: var(--white);

	@media (min-width: 768px){
		position: absolute;
		bottom: 0;
		right: 0;
		width: 70%;
	}
`

const Button = styled.button<StyledButton>`
	border: none;
	padding: .7rem 1rem;
	border-radius: 5px;
	text-transform: capitalize;
	margin-left: ${props => (props.$reverse ? null : 'auto')};

	background-color: ${props => (props.$primary ? 'var(--primary)' : 'transparent')};
	color: ${props => (props.$primary ? 'var(--white)' : 'var(--gray)')};
	cursor: pointer;
	transition: background-color 0.3s, color 0.3s;
	&:hover {
		background-color: ${props => props.bghover};
		color: ${props => props.colorhover};
	}
	&:disabled {
		background-color: grey;
		cursor: not-allowed;
	}
`
type ButtonProps = {
	next: () => void
	back: () => void
	isFirstStep: boolean
	isLastStep: boolean
	firstStepIsValid: boolean
}
export const ButtonsPanel = ({
	back,
	next,
	isFirstStep,
	isLastStep,
	firstStepIsValid,
}: ButtonProps) => {


	return (
		<ButtonBox>
			{!isFirstStep && (
				<Button
					$reverse
					type='button'
					onClick={back}
					colorhover='var(--primary)'>
					go back
				</Button>
			)}
			<Button
				disabled={!firstStepIsValid}
				type='button'
				onClick={next}
				bghover='var(--button-hover)'
				$primary>
				{isLastStep ? 'confirm' : 'next step'}
			</Button>
		</ButtonBox>
	)
}
