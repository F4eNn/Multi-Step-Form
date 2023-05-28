import styled from 'styled-components'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

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
	activeClass?: string
	isMonth: boolean
	updateFields: (field: any) => void
	listenerActive: boolean
	thisRef: any
	id: string
	thisTarget: any
	onSelect: (e?: any) => void
}

export const PlanItem = (props: PlanItemProps) => {
	const currentPrice = useRef<HTMLElement>(null)

	const getCurrentPrice = (e?: any) => {
		const hasActiveClass = currentPrice.current?.closest('button')!.classList.contains('active')

		if (hasActiveClass) {
			const stringValue = currentPrice.current?.textContent
			const extractPrice = stringValue?.replace(/\D/g, '')!
			const changeIntoNumber = +extractPrice
			props.updateFields({ selectedPlanPrice: changeIntoNumber })
		}
		// if (e) {
		// 	console.log(e.target.getAttribute('data-item'))
		// 	props.updateFields({ thisRef: e.target.getAttribute('data-item') })
		// }
	}

	useEffect(() => {
		getCurrentPrice()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.isMonth, props.listenerActive])

	// const buttonRef = useRef<any>(null)
	// useEffect(() => {
	// 	getCurrentPrice()
	// 	if (buttonRef.current.classList.contains('active')) {
	// 		// const elementWithActiveClass = buttonRef.current
	// 		props.updateFields({ thisRef: buttonRef.current.getAttribute('data-item') })
	// 		console.log(buttonRef.current.getAttribute('data-item'))
	// 		// console.log('zawiera')
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [props.listenerActive])
	console.log(props.thisTarget)

	return (
		<>
			<Button
				data-item={props.id}
				// ref={buttonRef}

				onClick={() => {
					getCurrentPrice(),
					props.onSelect()
				}}
				className={props.id === props.thisTarget ? 'active' : ''}>
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
