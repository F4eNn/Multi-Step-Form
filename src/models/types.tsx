type HeadingProps = {
	title: string
	description: string
}
type FormProps = {
	updateFields: any
	name: any
	email: string
	phone: string
}
type UserFormProps = {
	updateFields: any
	name: string
	email: string
	phone: string
}
type StyledButton = {
	$primary?: boolean
	bghover?: string
	colorhover?: string
	$reverse?: boolean
}
type ButtonPanelProps = {
	next: () => void
	back: () => void
	isFirstStep: boolean
	isLastStep: boolean
	firstStepIsValid: boolean
}

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
type SubscriptionProps = {
	updateFields: (
		field:
			| { selectedPlan: string }
			| { selectedPlanPrice: number }
			| { choosedPlan: string }
			| { goBackToPlans: boolean }
	) => void
	selectedPlan: string | null
	toggleStatePlans: boolean
}
type H3StyledProps = {
	$monthly?: string
	$yearly?: string
}
type TogglePlanProps = {
	updateFields: (fields: any) => void
	toggleStatePlans: boolean
}

type EnhancesProps = {
	updateFields: (fields: any) => void

	toggleStatePlans: boolean
	onlineService: string
	largerStorage: string
	customProfile: string
}
type EnchancesItems = EnhancesProps & {
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
