import { H1 } from '../../Assets/H1'
import { StepDescription } from '../../Assets/StepDescription'
import { Form } from './Form'

type UserFormProps = {
	updateFields: any
	name: string
	email: string
	phone: string
}
export const PersonalData = ({ updateFields, name, email, phone }: UserFormProps) => {
	return (
		<>
			<H1>Personal Info</H1>
			<StepDescription>Please provide your name, email address, and phone number.</StepDescription>
			<Form
				phone={phone}
				email={email}
				updateFields={updateFields}
				name={name}
			/>
		</>
	)
}
