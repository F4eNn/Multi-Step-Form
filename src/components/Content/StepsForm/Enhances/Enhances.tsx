import styled from 'styled-components'
import { EnhancesItem } from './EnhancesItem'
import { Heading } from '../../Assets/Heading'
import { PlanContainer } from '../SubscriptionPlan/SubscriptionPlan'

const addons = [
	{
		id: '1',
		title: 'Online service',
		img: './icon-checkmark.svg',
		price: 1,
		desc: 'Access to multiplayer games',
	},
	{
		id: '2',
		title: 'Larger storage',
		img: './icon-checkmark.svg',
		desc: 'Extra 1TB of cloud save',
		price: 2,
	},
	{
		id: '3',
		desc: 'Custom theme on your profile',
		title: 'Customizable profile',
		img: './icon-checkmark.svg',
		price: 2,
	},
]

type EnhancesProps = {
	updateFields: (fields: any) => void
    toggleStatePlans: boolean
}

export const Enhances = (props: EnhancesProps) => {
	const addonItem = addons.map(addon => (
		<EnhancesItem
			key={addon.id}
			id={addon.id}
			img={addon.img}
			desc={addon.desc}
			title={addon.title}
			price={addon.price}
            toggleStatePlans={props.toggleStatePlans}
		/>
	))

	return (
		<>
			<Heading
				description='Add-ons help enhance your gaming experience.'
				title='Pick add-ons'
			/>
			<PlanContainer>{addonItem}</PlanContainer>
		</>
	)
}
