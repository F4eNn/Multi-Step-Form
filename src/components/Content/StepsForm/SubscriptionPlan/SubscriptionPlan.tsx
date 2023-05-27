import styled from 'styled-components'
import { useState, useRef } from 'react'
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
	updateFields: (field: any) => void
}
export const SubscriptionPlan = ({ updateFields }: SubscriptionProps) => {
	const [monthPlan, setMonthPlan] = useState(false)
	const [listenerOnActive, setListenerOnActive] = useState(false)

	const planContainer = useRef<HTMLDivElement>(null)

	const addActiveClass = (e: React.MouseEvent<HTMLElement>) => {
		setListenerOnActive(prev => !prev)
		const buttonsArr = planContainer.current!.childNodes
		for (const item of buttonsArr) {
			;(item as HTMLDivElement).classList.remove('active')
			;(e.target as HTMLButtonElement).classList.add('active')
		}
	}
	const getPeriodHelper = (month: boolean) => {
		setMonthPlan(month)
	}

	return (
		<>
			<Heading
				title='Select your plan'
				description='You have the option of monthly or yearly billing.'
			/>
			<PlanContainer
				ref={planContainer}
				onClick={addActiveClass}>
				<PlanItem
					activeClass='active'
					title='Arcade'
					img='./icon-arcade.svg'
					price={9}
					isMonth={monthPlan}
					updateFields={updateFields}
					listenerActive={listenerOnActive}
				/>
				<PlanItem
					title='Advanced'
					img='./icon-advanced.svg'
					price={12}
					isMonth={monthPlan}
					updateFields={updateFields}
					listenerActive={listenerOnActive}
				/>
				<PlanItem
					title='Pro'
					img='./icon-pro.svg'
					price={15}
					isMonth={monthPlan}
					updateFields={updateFields}
					listenerActive={listenerOnActive}
				/>
			</PlanContainer>
			<TogglePlan getPeriodHelper={getPeriodHelper} />
		</>
	)
}
