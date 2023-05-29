import styled from 'styled-components'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const Button = styled.button`
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
	&.noActive {
		background-color: red;
		border-color: red;
	}
	&:hover {
		border-color: var(--light-blue);
	}
`

const Content = styled.div`
	text-align: left;
	display: flex;
	flex-direction: column;
	gap: 3px;
`
const H2 = styled.h2`
	font-size: 1em;
`
const Span = styled.span`
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
	isMonth: boolean
	updateFields: (
		field: { thisTarget: string | null } | { selectedPlanPrice: number } | { secondStepIsValid: boolean }
	) => void
	id: string
	thisTarget: string | null
	secondStepIsValid: boolean
}

export const PlanItem = (props: PlanItemProps) => {
	const [listenerActive, setListenerActive] = useState(false)

	const currentPrice = useRef<HTMLElement>(null)

	const getCurrentPrice = (e?: React.MouseEvent<HTMLButtonElement>) => {
		const hasActiveClass = currentPrice.current?.closest('button')!.classList.contains('active')

		if (hasActiveClass) {
			const stringValue = currentPrice.current?.textContent
			const extractPrice = stringValue?.replace(/\D/g, '')!
			const changeIntoNumber = +extractPrice
			props.updateFields({ selectedPlanPrice: changeIntoNumber })
		}
		if (e) {
			setListenerActive(prev => !prev)
			const target = e.target as HTMLButtonElement
			const attribute = target.getAttribute('data-item')
			props.updateFields({ thisTarget: attribute })
			props.updateFields({ secondStepIsValid: true })
		}
	}
	useEffect(() => {
		getCurrentPrice()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.isMonth, listenerActive])
	return (
		<>
			<Button
				data-item={props.id}
				onClick={getCurrentPrice}
				className={
					props.secondStepIsValid ? `${props.id === props.thisTarget && 'active'}` : `${props.id === '1' && 'active'}`
				}>
				<Image
					src={props.img}
					alt=''
					width={40}
					height={40}
				/>
				<Content>
					<H2>{props.title}</H2>
					<Span ref={currentPrice}> {`${props.isMonth ? `$${props.price * 10}/yr` : `$${props.price}/mo`}`}</Span>
					{props.isMonth ? <Badge>2 months free</Badge> : null}
				</Content>
			</Button>
		</>
	)
}
