import styled from 'styled-components'

interface StyledButton {
	$primary?: boolean
	bghover?: string
	colorhover?: string
	$reverse?: boolean
}

const ButtonBox = styled.div`
	width: 100%;
	padding: 0.7rem 1.5rem;
	display: flex;

	justify-content: space-between;
	background-color: var(--white);
`

const Button = styled.button<StyledButton>`
	border: none;
	padding: 0.5rem 1rem;
	border-radius: 5px;
	text-transform: capitalize;
	margin-left: ${props => (props.$reverse ? null : 'auto')};

	background-color: ${props => (props.$primary ? 'var(--primary)' : 'transparent')};
	color: ${props => (props.$primary ? 'var(--white)' : 'var(--grey)')};
	cursor: pointer;
	transition: background-color 0.3s, color 0.3s;
	&:hover {
		background-color: ${props => props.bghover};
		color: ${props => props.colorhover};
	}
`
type ButtonProps = {
	next: () => void
	back: () => void
	isFirstStep: boolean
}
export const ButtonsPanel = ({ back, next, isFirstStep }: ButtonProps) => {
	console.log(isFirstStep)
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
				type='button'
				onClick={next}
				bghover='var(--button-hover)'
				$primary>
				next step
			</Button>
		</ButtonBox>
	)
}
