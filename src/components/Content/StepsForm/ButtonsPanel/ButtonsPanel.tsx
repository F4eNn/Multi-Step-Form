import styled from 'styled-components'

interface Btn {
	$Bgc?: boolean
	$fontColor?: boolean
}
const ButtonBox = styled.div`
	width: 100%;
	padding: 0.7rem 1.5rem;
	display: flex;
	justify-content: space-between;
	background-color: var(--white);
`

const Button = styled.button.attrs<Btn>(props => ({
	hoverbgc: props.hoverbgc,
	hoverfont: props.hoverfont,
}))`
	background: ${props => (props.$Bgc ? 'var(--primary)' : 'transparent')};
	color: ${props => (props.$fontColor ? 'var(--white)' : 'var(--grey)')};
	border: none;
	padding: 0.5rem 1.5rem;
	border-radius: 5px;
	text-transform: capitalize;

	cursor: pointer;
	transition: background-color 0.3s, color 0.3s;
	&:hover {
		background-color: ${props => props.hoverbgc};
		color: ${props => props.hoverfont};
	}
`

export const ButtonsPanel = () => {
	return (
		<ButtonBox>
			<Button hoverfont='var(--primary)'>go back</Button>
			<Button
				hoverbgc='var(--button-hover)'
				$fontColor
				$Bgc>
				next
			</Button>
		</ButtonBox>
	)
}
