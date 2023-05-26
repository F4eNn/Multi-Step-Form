import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useRef } from 'react'

type StyledButtonProps = {
	active: any
}

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
	price: string
	img: string
	activeClass?: string
}

export const PlanItem = ({ img, price, title, activeClass }: PlanItemProps) => {
	return (
		<Button className={activeClass}>
			<Image
				src={img}
				alt=''
				width={40}
				height={40}
			/>
			<Content>
				<H2>{title}</H2>
				<Span>{price}</Span>
			</Content>
		</Button>
	)
}
