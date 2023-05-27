import styled from 'styled-components'
import { useState } from 'react'
const ToggleBox = styled.div`
	margin-top: 2rem;
	justify-content: space-around;
	display: flex;
	width: 100%;
	padding: 1rem;
`
type H3StyledProps = {
	$monthly?: string
	$yearly?: string
}
const H3 = styled.h3<H3StyledProps>`
	color: ${props => props.$monthly || props.$yearly};
	font-size: 1em;
	transition: color 0.3s;
`
const Switch = styled.button`
	position: relative;
	width: 50px;
	height: 25px;
	border: none;
	background-color: var(--primary);
	border-radius: 30px;
	cursor: pointer;
	&::before {
		content: '';
		position: absolute;
		left: 4px;
		top: 50%;
		transform: translate(0, -50%);
		background-color: var(--white);
		width: 18px;
		height: 18px;
		border-radius: 50%;
		transition: transform 0.3s;
	}
	&.switch_plan::before {
		transform: translate(24px, -50%);
	}
`

type PlanProps = {
	getPeriodHelper: (month: boolean) => void
}

export const TogglePlan = ({ getPeriodHelper }: PlanProps) => {
	const [isToggle, setIsToggle] = useState(false)
	const [isMonth, setIsMonth] = useState(true)
	const [isYear, setIsYear] = useState(false)

	const switchPlan = () => {
		setIsToggle(prev => !prev)
		setIsYear(prev => !prev)
		setIsMonth(prev => !prev)
		getPeriodHelper(isMonth)
	}

	return (
		<ToggleBox>
			<H3 $monthly={`${isMonth ? 'var(--primary)' : 'var(--grey)'} `}>Monthly</H3>
			<Switch
				onClick={switchPlan}
				className={`${isToggle ? 'switch_plan' : null}`}
			/>
			<H3 $yearly={`${isYear ? 'var(--primary)' : 'var(--grey)'}`}>Yearly</H3>
		</ToggleBox>
	)
}
