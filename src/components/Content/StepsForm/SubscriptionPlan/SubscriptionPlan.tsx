import styled from 'styled-components'
import { Heading } from '../../Assets/Heading'
import { PlanItem } from './PlanItem'

import { useRef } from 'react'
import { TogglePlan } from './TogglePlan'

const PlanContainer = styled.div`
    margin-top: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 10px;
`

export const SubscriptionPlan = () => {
	const parent = useRef<HTMLDivElement>(null)

	const addActiveClass = (e: React.MouseEvent<HTMLElement>) => {
		const buttonsArr = parent.current!.childNodes
		for (const item of buttonsArr) {
			;(item as HTMLDivElement).classList.remove('active')
			;(e.target as HTMLButtonElement).classList.add('active')
		}
	}
	return (
		<>
			<Heading
				title='Select your plan'
				description='You have the option of monthly or yearly billing.'
			/>
			<PlanContainer
				ref={parent}
				onClick={addActiveClass}>
				<PlanItem
                    activeClass='active'
					title='Arcade'
					img='./icon-arcade.svg'
					price='$9/mo'
				/>
				<PlanItem
					key={2}
					title='Advanced'
					img='./icon-advanced.svg'
					price='$12/mo'
				/>
				<PlanItem
					key={3}
					title='Pro'
					img='./icon-pro.svg'
					price='$15/m0'
				/>
			</PlanContainer>
            <TogglePlan />
		</>
	)
}
