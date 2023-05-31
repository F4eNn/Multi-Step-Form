import styled from 'styled-components'

export const StepDescription = styled.p`
	color: var(--gray);
	font-size: .7em;
	font-weight: 400;
	line-height: 25px;
	margin-bottom: 1.2rem;
`

export const H1 = styled.h1`
	color: var(--primary);
	font-size: 1.4em;
	margin-bottom: .6rem;
`



export const Heading = ({ description, title }: HeadingProps) => {
	return (
		<>
			<H1>{title}</H1>
			<StepDescription>{description}</StepDescription>
		</>
	)
}
