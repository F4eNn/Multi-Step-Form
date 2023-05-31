import { Form } from './Form'
import { Heading } from '../../Assets/Heading'

export const PersonalData = ({ updateFields, name, email, phone }: UserFormProps) => {
	return (
		<>
			<Heading
				title='Personal Info'
				description='Please provide your name, email address, and phone number.'
			/>
			<Form
				phone={phone}
				email={email}
				updateFields={updateFields}
				name={name}
			/>
		</>
	)
}
