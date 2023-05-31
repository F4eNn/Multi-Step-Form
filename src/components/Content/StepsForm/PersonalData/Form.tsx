import styled from 'styled-components'
import { useEffect } from 'react'
import { useInput } from '@/hooks/use-input'
const Box = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 4px;
	margin-top: 1rem;
`
const Input = styled.input<{ $valid?: string | false }>`
	padding: 0.7rem 1rem;
	border-radius: 5px;
	border: ${props => props.$valid || '1px solid var(--border-color)'};
	&:focus {
		outline: ${props => props.$valid || '1px solid var(--light-blue)'};
	}
	&::placeholder {
		font-size: 1.1em;
	}
`
const Label = styled.label`
	color: var(--primary);
	font-size: 0.75em;
`
const ErrorMsg = styled.p`
	position: absolute;
	right: 0;
	top: 0;
	font-size: 0.6em;
	color: var(--error);
`

export const Form = ({ updateFields, name, email, phone }: FormProps) => {
	const emailExpression =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	const telExpression = /^[+]?[0-9]{9,12}$/

	const telRegex = new RegExp(telExpression)
	const emailRegex = new RegExp(emailExpression)

	const phoneValidity = telRegex.test(phone)
	const emailValidity = emailRegex.test(email)
	const nameValidity = name !== ''

	const {
		isError: nameIsValid,
		inputValidity: nameValid,
		onBlurInput: nameBlur,
		onChangeInput: nameChange,
	} = useInput('name', nameValidity, updateFields)

	const {
		isError: emailIsValid,
		inputValidity: emailValid,
		onBlurInput: emailBlur,
		onChangeInput: emailChange,
	} = useInput('email', emailValidity, updateFields)

	const {
		isError: phoneIsValid,
		inputValidity: phoneValid,
		onBlurInput: onBlurPhone,
		onChangeInput: onChangePhone,
	} = useInput('phone', phoneValidity, updateFields)

	useEffect(() => {
		if (emailValid && phoneValid && nameValid) {
			updateFields({ firstStepValid: true })
			return
		}
		updateFields({ firstStepValid: false })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [name, email, phone])

	const errorName = nameIsValid && '1px solid var(--error)'
	const errorEmail = emailIsValid && '1px solid var(--error)'
	const errorTel = phoneIsValid && '1px solid var(--error)'
	return (
		<form>
			<Box>
				<Label htmlFor='name'>Name</Label>
				{errorName && <ErrorMsg>This field is required</ErrorMsg>}
				<Input
					$valid={errorName}
					onBlur={nameBlur}
					onChange={nameChange}
					id='name'
					type='text'
					value={name}
					placeholder='e.g. Stephen King'
				/>
			</Box>
			<Box>
				<Label htmlFor='email'>Email Address</Label>
				{errorEmail && <ErrorMsg>This field is required</ErrorMsg>}
				<Input
					$valid={errorEmail}
					onBlur={emailBlur}
					onChange={emailChange}
					id='email'
					type='email'
					value={email}
					placeholder='e.g. stephenking@lorem.com'
				/>
			</Box>
			<Box>
				<Label htmlFor='phone'>Phone Number</Label>
				{errorTel && <ErrorMsg>This field is required</ErrorMsg>}
				<Input
					$valid={errorTel}
					onBlur={onBlurPhone}
					onChange={onChangePhone}
					id='phone'
					value={phone}
					type='tel'
					placeholder='e.g. +1 234 567 890'
				/>
			</Box>
		</form>
	)
}
