import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react'
import { Heading } from '../../Assets/Heading'
import { PlanItem } from './PlanItem'
import { TogglePlan } from './TogglePlan'
import Image from 'next/image'
const PlanContainer = styled.div`
	margin-top: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 10px;
`
type SubscriptionProps = {
	updateFields: (field: any) => void
	thisTarget: any
	thisRef: any
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

export const SubscriptionPlan = ({ updateFields, thisTarget, thisRef }: SubscriptionProps) => {
	const [monthPlan, setMonthPlan] = useState(false)
	const [listenerOnActive, setListenerOnActive] = useState(false)

	const buttonRefs = useRef<Array<HTMLButtonElement | null>>([])

	const planContainer = useRef<HTMLDivElement>(null)

	const addActiveClass = (e: React.MouseEvent<HTMLElement>) => {
		setListenerOnActive(prev => !prev)
		const target = e.target as HTMLElement
		if (target) {
			const getAttribute = target.getAttribute('data-item')
			updateFields({ thisTarget: getAttribute })
			console.log(thisTarget)
		}
	}

	const getPeriodHelper = (month: boolean) => {
		setMonthPlan(month)
	}

	const planItem = planVersion.map(item => (
		<PlanItem
			key={item.id}
			id={item.id}
			img={item.img}
			title={item.title}
			price={item.price}
			updateFields={updateFields}
			listenerActive={listenerOnActive}
			isMonth={monthPlan}
			thisRef={thisRef}
			thisTarget={thisTarget}
			onSelect={addActiveClass}
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
