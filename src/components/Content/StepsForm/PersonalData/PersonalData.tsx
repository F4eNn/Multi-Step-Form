import { H1 } from '../../Assets/H1'
import { StepDescription } from '../../Assets/StepDescription'
import { Form } from './Form'

interface PersonalDataProps {
	handleForm: (callback: () => void) => void
}

export const PersonalData = () => {
	return (
		<>
			<H1>Personal Info</H1>
			<StepDescription>Please provide your name, email address, and phone number.</StepDescription>
			<Form />
		</>
	)
}
