import styled from 'styled-components'

export const StepDescription = styled.p`
	color: var(--grey);
	font-size: 1em;
`

export const H1 = styled.h1`
	color: var(--primary);
	font-size: 1.4em;
	margin-bottom: 1rem;
`

type HeadingProps = {
	title: string
	description: string
}

export const Heading = ({ description, title }: HeadingProps) => {
	return (
		<>
			<H1>{title}</H1>
			<StepDescription>{description}</StepDescription>
		</>
	)
}
