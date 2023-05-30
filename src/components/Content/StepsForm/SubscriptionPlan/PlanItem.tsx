import styled from 'styled-components'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export const Button = styled.button`
	background-color: transparent;
	padding: 1rem;
	border: 1px solid var(--border-color);
	border-radius: 8px;
	display: flex;
	align-items: center;
	gap: 15px;
	transition: background-color 0.3s, border-color 0.3s;
	cursor: pointer;
	&.active {
		background-color: var(--light-gray);
		border-color: var(--light-blue);
	}
	&:hover {
		border-color: var(--light-blue);
	}
	@media (min-width: 768px) {
		height: 145px;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
	}
`

export const Content = styled.div`
	text-align: left;
	display: flex;
	flex-direction: column;
	gap: 3px;
`
export const H2 = styled.h2`
	font-size: 1em;
`
export const Span = styled.span`
	color: var(--grey);
`
const Badge = styled.p`
	color: var(--primary);
	font-size: 0.9em;
`

type PlanItemProps = {
	title: string
	price: number
	img: string
	updateFields: (
		field:
			| { selectedPlan: string }
			| { selectedPlanPrice: number }
			| { choosedPlan: string }
			| { goBackToPlans: boolean }
	) => void
	id: string
	selectedPlan: string | null
	toggleStatePlans: boolean
}

export const PlanItem = (props: PlanItemProps) => {
	const [listenerActive, setListenerActive] = useState(false)
	const currentPrice = useRef<HTMLElement>(null)

	const getCurrentPrice = () => {
		const hasActiveClass = currentPrice.current?.closest('button')!.classList.contains('active')
		const choosedPlan = currentPrice.current?.previousElementSibling?.textContent!
		if (hasActiveClass) {
			const stringValue = currentPrice.current?.textContent
			const extractPrice = stringValue?.replace(/\D/g, '')!
			const changeIntoNumber = +extractPrice
			props.updateFields({ selectedPlanPrice: changeIntoNumber })
			props.updateFields({ choosedPlan: choosedPlan })
		}
	}
	const addActiveClass = (e: React.MouseEvent<HTMLButtonElement>) => {
		setListenerActive(prev => !prev)
		const target = e.target as HTMLButtonElement
		const buttonTarget = target.closest('button')!
		const attribute = buttonTarget.getAttribute('data-item')
		if (attribute) props.updateFields({ selectedPlan: attribute })
	}
	useEffect(() => {
		getCurrentPrice()
		props.updateFields({ goBackToPlans: false })
		return () => {}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.toggleStatePlans, listenerActive])

	const relevantPrice = !props.toggleStatePlans ? `$${props.price}/mo` : `$${props.price * 10}/yr`
	return (
		<>
			<Button
				data-item={props.id}
				onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
					getCurrentPrice()
					addActiveClass(e)
				}}
				className={props.id === props.selectedPlan ? 'active' : ''}>
				<Image
					src={props.img}
					alt=''
					width={40}
					height={40}
				/>
				<Content>
					<H2>{props.title}</H2>
					<Span ref={currentPrice}>{relevantPrice}</Span>
					{props.toggleStatePlans && <Badge>2 months free</Badge>}
				</Content>
			</Button>
		</>
	)
}
