import styled from 'styled-components'
import { useState } from 'react'
import { Heading } from '../../Assets/Heading'
import { PlanItem } from './PlanItem'
import { TogglePlan } from './TogglePlan'
const PlanContainer = styled.div`
	margin-top: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 10px;
`
type SubscriptionProps = {
	updateFields: (
		field: { thisTarget: string | null } | { selectedPlanPrice: number } | { secondStepIsValid: boolean }
	) => void
	thisTarget: string | null
	secondStepIsValid: boolean
}
const planVersion = [
	{
		id: '1',
		title: 'Arcade',
		img: './icon-arcade.svg',
		price: 9,
	},
	{
		id: '2',
		title: 'Advance',
		img: './icon-advanced.svg',
		price: 12,
	},
	{
		id: '3',
		title: 'Pro',
		img: './icon-pro.svg',
		price: 15,
	},
]

export const SubscriptionPlan = ({ updateFields, thisTarget, secondStepIsValid }: SubscriptionProps) => {
	const [monthPlan, setMonthPlan] = useState(false)
	const getPeriodHelper = (month: boolean) => {
		setMonthPlan(month)
	}
	const planItem = planVersion.map(item => (
		<PlanItem
			secondStepIsValid={secondStepIsValid}
			key={item.id}
			id={item.id}
			img={item.img}
			title={item.title}
			price={item.price}
			updateFields={updateFields}
			isMonth={monthPlan}
			thisTarget={thisTarget}
		/>
	))
	return (
		<>
			<Heading
				title='Select your plan'
				description='You have the option of monthly or yearly billing.'
			/>
			<PlanContainer>{planItem}</PlanContainer>
			<TogglePlan getPeriodHelper={getPeriodHelper} />
		</>
	)
}
