import styled from 'styled-components'
import { useState } from 'react'
import { Heading } from '../../Assets/Heading'
import { PlanItem } from './PlanItem'
import { TogglePlan } from './TogglePlan'
export const PlanContainer = styled.div`
	margin-top: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 10px;
	@media (min-width: 768px){
		flex-direction: row;
	}
`
type SubscriptionProps = {
	updateFields: (
		field:
			| { selectedPlan: string }
			| { selectedPlanPrice: number }
			| { choosedPlan: string }
			| { goBackToPlans: boolean }
	) => void
	selectedPlan: string | null
	toggleStatePlans: boolean
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

export const SubscriptionPlan = ({ updateFields, selectedPlan, toggleStatePlans }: SubscriptionProps) => {
	// updateFields({goBackToPlans: 0})

	const planItem = planVersion.map(item => (
		<PlanItem
			key={item.id}
			id={item.id}
			img={item.img}
			title={item.title}
			price={item.price}
			updateFields={updateFields}
			selectedPlan={selectedPlan}
			toggleStatePlans={toggleStatePlans}
		/>
	))
	return (
		<>
			<Heading
				title='Select your plan'
				description='You have the option of monthly or yearly billing.'
			/>
			<PlanContainer>{planItem}</PlanContainer>
			<TogglePlan
				toggleStatePlans={toggleStatePlans}
				updateFields={updateFields}
			/>
		</>
	)
}
