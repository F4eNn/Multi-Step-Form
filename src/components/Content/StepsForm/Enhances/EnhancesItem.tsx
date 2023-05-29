import styled from 'styled-components'
import { Button } from '../SubscriptionPlan/PlanItem'
import { Content } from '../SubscriptionPlan/PlanItem'
import { H2 } from '../SubscriptionPlan/PlanItem'
import { Span } from '../SubscriptionPlan/PlanItem'
import Image from 'next/image'

type EnhancesProps = {
	id: string
	img: string
	title: string
	desc: string
	price: number
	toggleStatePlans: boolean
}
const PriceBox = styled.div`
	margin-left: auto;
`
const Price = styled.span`
	color: var(--light-blue);
`

const Checkbox = styled.div`
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid var(--border-color);
	border-radius: 5px;
	&.checked {
		background-color: var(--light-blue);
	}
`

export const EnhancesItem = (props: EnhancesProps) => {

	const relevantPrice = props.toggleStatePlans ? `+$${props.price * 10}/yr` : `+$${props.price}/mo`
	return (
		<Button data-item={props.id}>
			<Checkbox className='checked'>
				<Image
					src={props.img}
					alt=''
					width={15}
					height={15}
				/>
			</Checkbox>
			<Content>
				<H2>{props.title}</H2>
				<Span>{props.desc}</Span>
			</Content>
			<PriceBox>
				<Price>{relevantPrice}</Price>
			</PriceBox>
		</Button>
	)
}
