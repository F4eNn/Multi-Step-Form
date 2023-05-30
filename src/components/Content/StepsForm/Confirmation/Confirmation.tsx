import styled from 'styled-components'
import Image from 'next/image'
import { H1 } from '../../Assets/Heading'
import { ChangeButton } from '../Summary/Summary'

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 15px;
	align-items: center;
	margin-top: 2rem;
    font-size: 1.1em;
`
const Paragraph = styled.p`
	text-align: center;
	color: var(--gray);
	font-size: .9em;
`
const AnotherPlanButton = styled(ChangeButton)`
margin-top: 2.5rem;
	align-self: flex-start;
	font-size: 0.7em;
`

export const Confirmation = () => {
	return (
		<Container>
			<Image
				src='./icon-thank-you.svg'
				width={50}
				height={50}
				alt='confirmation'
			/>
			<H1>Thank you!</H1>
			<Paragraph>
				Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
				please feel free to email us at support@loremgaming.com.
			</Paragraph>
			<AnotherPlanButton
				onClick={() => {
					window.location.reload()
				}}>
				Buy another plan
			</AnotherPlanButton>
		</Container>
	)
}
