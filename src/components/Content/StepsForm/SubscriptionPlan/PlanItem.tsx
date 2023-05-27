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
	gap: 5px;
`
const H2 = styled.h2`
	font-size: 1em;
`
const Span = styled.span`
	color: var(--grey);
`
type PlanItemProps = {
	title: string
	price: number
	img: string
	activeClass?: string
	isMonth: boolean
	updateFields: (field: any) => void
	listenerActive: boolean
}

export const PlanItem = (props: PlanItemProps) => {
	const currentPrice = useRef<HTMLElement>(null)

	const getCurrentPrice = () => {
		const hasActiveClass = currentPrice.current?.closest('button')!.classList.contains('active')

		if (hasActiveClass) {
			const stringValue = currentPrice.current?.textContent
			const extractPrice = stringValue?.replace(/\D/g, '')!
			const changeIntoNumber = +extractPrice
			props.updateFields({ selectedPlanPrice: changeIntoNumber })
		}
	}

	useEffect(() => {
		getCurrentPrice()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.isMonth, props.listenerActive])

	return (
		<Button
			onClick={getCurrentPrice}
			className={props.activeClass}>
			<Image
				src={props.img}
				alt=''
				width={40}
				height={40}
			/>
			<Content>
				<H2>{props.title}</H2>
				<Span ref={currentPrice}> {`${props.isMonth ? `$${props.price * 10}/yr` : `$${props.price}/mo`}`}</Span>
			</Content>
		</Button>
	)
}
