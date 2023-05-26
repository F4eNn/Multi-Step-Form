import styled from 'styled-components'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { FormContext } from '@/store/form-context'

const Box = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 5px;
	margin-top: 0.8rem;
`
const Input = styled.input<{ $valid?: string | false }>`
	padding: 0.5rem 1rem;
	border-radius: 5px;
	border: ${props => props.$valid || '1px solid var(--border-color)'};
	&:focus {
		outline: ${props => props.$valid || '1px solid var(--light-blue)'};
	}
`
const Label = styled.label`
	color: var(--primary);
	font-size: 0.7em;
`
const ErrorMsg = styled.p`
	position: absolute;
	right: 0;
	top: 0;
	font-size: 0.6em;
	color: var(--error);
`

type FormProps = {
	updateFields: any
	name: any
	email: string
	phone: string
}

export const Form = ({ updateFields, name, email, phone }: FormProps) => {
	const emailExpression =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	const telExpression = /^[+]?[0-9]{9,12}$/

	const telRegex = new RegExp(telExpression)
	const emailRegex = new RegExp(emailExpression)

	const [nameIsValid, setNameIsValid] = useState(false)
	const [EmailIsValid, setEmailIsValid] = useState(false)
	const [phoneIsValid, setPhoneIsValid] = useState(false)

	const phoneValidity = telRegex.test(phone)
	const emailValidity = emailRegex.test(email)
	const nameValidity = name !== ''

	const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNameIsValid(false)
		updateFields({ name: e.target.value })
	}
	const onBlurName = () => {
		if (!nameValidity) {
			setNameIsValid(true)
			return
		}
	}

	const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmailIsValid(false)
		updateFields({ email: e.target.value })
	}
	const onBlurEmail = () => {
		if (!emailValidity) {
			setEmailIsValid(true)
			return
		}
	}
	const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPhoneIsValid(false)
		updateFields({ phone: e.target.value })
	}
	const onBlurPhone = () => {
		if (!phoneValidity) {
			setPhoneIsValid(true)
			return
		}
	}
	useEffect(() => {
		if (emailValidity && phoneValidity && nameValidity) {
			updateFields({ firstStepValid: true })
			return
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [name, email, phone])

	const errorName = nameIsValid && '1px solid var(--error)'
	const errorEmail = EmailIsValid && '1px solid var(--error)'
	const errorTel = phoneIsValid && '1px solid var(--error)'

	return (
		<form>
			<Box>
				<Label htmlFor='name'>Name</Label>
				{nameIsValid && <ErrorMsg>This field is required</ErrorMsg>}
				<Input
					$valid={errorName}
					onBlur={onBlurName}
					onChange={onChangeName}
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
					onBlur={onBlurEmail}
					onChange={onChangeEmail}
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
					onBlur={onBlurPhone}
					$valid={errorTel}
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
