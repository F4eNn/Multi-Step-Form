import styled from 'styled-components'
import { Button } from '../SubscriptionPlan/PlanItem'
import { Content } from '../SubscriptionPlan/PlanItem'
import { H2 } from '../SubscriptionPlan/PlanItem'
import { Span } from '../SubscriptionPlan/PlanItem'
import Image from 'next/image'
import { useRef, useState } from 'react'
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

type EnhancesProps = {
	id: string
	updateFields: (fields: any) => void
	img: string
	title: string
	desc: string
	price: number
	toggleStatePlans: boolean
	onlineService: string
	largerStorage: string
	customProfile: string
}
export const EnhancesItem = (props: EnhancesProps) => {
	const toggleClass = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLButtonElement
		const buttonTarget = target.closest('button')
		const itemId = buttonTarget?.getAttribute('data-item')

        console.log(buttonTarget?.classList.toggle('active'))
        
		switch (itemId) {
			case '1':
				props.updateFields({ onlineService: itemId })
				break
			case '2':
				props.updateFields({ largerStorage: itemId })
				break
			case '3':
				props.updateFields({ customProfile: itemId })
				break
		}
	}

	const relevantPrice = props.toggleStatePlans ? `+$${props.price * 10}/yr` : `+$${props.price}/mo`
	const addClass = props.customProfile === props.id ? 'active' : ''
	return (
		<Button
			onClick={toggleClass}
			className={addClass}
			data-item={props.id}>
			<Checkbox>
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
