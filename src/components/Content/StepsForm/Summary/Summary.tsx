import styled from 'styled-components'
import { Heading } from '../../Assets/Heading'
import { H2 } from '../SubscriptionPlan/PlanItem'
const Container = styled.div`
	background-color: var(--light-gray);
	border-radius: 5px;
	padding: 1.4rem;
	margin-top: 2rem;
`
export const ChangeButton = styled.button`
	text-decoration: underline;
	color: var(--grey);
	background-color: transparent;
	border: none;
	cursor: pointer;
	transition: color 0.3s;
	margin: 0.5rem 0 1rem;
	&:hover {
		color: var(--light-blue);
	}
`
const SelectedPlanBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const Price = styled.span<{$bold?: string, $font?: boolean}>`
	color: var(--primary);
	font-size: ${props => props.$font ? '.7em' : '.6em'};
	font-weight: ${props => props.$bold};
`
const SeparateLine = styled.div`
	margin-inline: auto;
	width: 100%;
	height: 1px;
	background-color: var(--very-light-gray);
`
const SelectedAddonBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: .5rem;
`
const H3 = styled.h3`
	font-size: .6em;
	color: var(--gray);
`
const PlanName = styled(H2)`
	font-size: .8em;
`

const FinalPriceBox = styled.div`
	padding: 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.3em;
`
type SummaryProps = {
	togglePlan: boolean
	choosedPlan: string
	updateFields: (
		fields:
			| { goBackToPlans: boolean }
			| { onlineServicePrice: number }
			| { largerStoragePrice: number }
			| { customProfilePrice: number }
	) => void
	onlineServicePrice: number
	largerStoragePrice: number
	customProfilePrice: number
	selectedPlanPrice: number
}

export const Summary = (props: SummaryProps) => {
	const goBackToPlans = () => {
		props.updateFields({ goBackToPlans: true })
	}

	const planPeriod = props.togglePlan ? 'Yearly' : 'Monthly'
	const planFinalPrice = props.togglePlan ? `$${props.selectedPlanPrice}/yr` : `$${props.selectedPlanPrice}/mo`

	const isOnlineService = props.onlineServicePrice !== 0

	const onlineFinalPrice = props.togglePlan
		? `+$${props.onlineServicePrice * 10}/yr`
		: `+$${props.onlineServicePrice}/mo`

	const isLargerStorage = props.largerStoragePrice !== 0

	const largerFinalPrice = props.togglePlan
		? `+$${props.largerStoragePrice * 10}/yr`
		: `+$${props.largerStoragePrice}/mo`

	const isCustomProfile = props.customProfilePrice !== 0

	const customFinalPrice = props.togglePlan
		? `+$${props.customProfilePrice * 10}/yr`
		: `+$${props.customProfilePrice}/mo`

	const countPlansMonth =
		props.onlineServicePrice + props.largerStoragePrice + props.customProfilePrice + props.selectedPlanPrice

	const countPlansYear =
		props.onlineServicePrice * 10 +
		props.customProfilePrice * 10 +
		props.largerStoragePrice * 10 +
		props.selectedPlanPrice

	const FinalPrice = props.togglePlan ? `$${countPlansYear}/yr` : `$${countPlansMonth}/mo`
	const timePeriod = props.togglePlan ? 'Total (per year)' : 'Total (per month)'
	return (
		<>
			<Heading
				title='Finishing up'
				description='Double-check everything looks OK before confirming.'
			/>
			<Container>
				<SelectedPlanBox>
					<div>
						<PlanName>{`${props.choosedPlan} (${planPeriod})`}</PlanName>
						<ChangeButton onClick={goBackToPlans}>Change</ChangeButton>
					</div>
					<Price $bold='bold' $font>{planFinalPrice}</Price>
				</SelectedPlanBox>

				<SeparateLine />

				{isOnlineService && (
					<SelectedAddonBox>
						<H3>Online service</H3>
						<Price>{onlineFinalPrice}</Price>
					</SelectedAddonBox>
				)}

				{isLargerStorage && (
					<SelectedAddonBox>
						<H3>Larger storage</H3>
						<Price>{largerFinalPrice}</Price>
					</SelectedAddonBox>
				)}
				{isCustomProfile && (
					<SelectedAddonBox>
						<H3>Customizable profile</H3>
						<Price>{customFinalPrice}</Price>
					</SelectedAddonBox>
				)}
			</Container>

			<FinalPriceBox>
				<H3>{timePeriod}</H3>
				<Price>{FinalPrice}</Price>
			</FinalPriceBox>
		</>
	)
}
