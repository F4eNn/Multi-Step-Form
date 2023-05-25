import styled from 'styled-components'
import { useInput } from '@/hooks/use-inputs'
import { useContext, useEffect } from 'react'
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
export const Form = () => {
	const emailExpression =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	const telExpression = /^[+]?[0-9]{9,12}$/
	const telRegex = new RegExp(telExpression)
	const emailRegex = new RegExp(emailExpression)

	const { setName, setEmail, setPhone, setFirstStep } = useContext(FormContext)

	const {
		isValidInput: enteredNameIsValid,
		value: enteredName,
		inputBlurHandler: nameInputBlurHandler,
		inputChangeHandler: nameInputChangeHandler,
		isError: nameInputIsValid,
	} = useInput(value => value.trim() !== '')
	const {
		isValidInput: enteredEmailIsValid,
		value: enteredEmail,
		inputBlurHandler: emailInputBlurHandler,
		inputChangeHandler: emailInputChangeHandler,
		isError: emailInputIsValid,
	} = useInput(value => emailRegex.test(value))
	const {
		isValidInput: enteredTelIsValid,
		value: enteredTel,
		inputBlurHandler: telInputBlurHandler,
		inputChangeHandler: telInputChangeHandler,
		isError: telIsValid,
	} = useInput(value => telRegex.test(value.trim()))

	useEffect(() => {
		if (enteredNameIsValid && enteredEmailIsValid && enteredTelIsValid) {
			setName(enteredName)
			setEmail(enteredEmail)
			setPhone(enteredTel)
			setFirstStep(true)
			return
		}
		return setFirstStep(false)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [enteredEmailIsValid, enteredNameIsValid, enteredTelIsValid])

	const errorName = nameInputIsValid && '1px solid var(--error)'
	const errorEmail = emailInputIsValid && '1px solid var(--error)'
	const errorTel = telIsValid && '1px solid var(--error)'
	return (
		<form>
			<Box>
				<Label htmlFor='name'>Name</Label>
				{nameInputIsValid && <ErrorMsg>This field is required</ErrorMsg>}
				<Input
					$valid={errorName}
					onBlur={nameInputBlurHandler}
					onChange={nameInputChangeHandler}
					id='name'
					type='text'
					placeholder='e.g. Stephen King'
				/>
			</Box>
			<Box>
				<Label htmlFor='email'>Email Address</Label>
				{emailInputIsValid && <ErrorMsg>This field is required</ErrorMsg>}
				<Input
					$valid={errorEmail}
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
					id='email'
					type='email'
					placeholder='e.g. stephenking@lorem.com'
				/>
			</Box>
			<Box>
				<Label htmlFor='phone'>Phone Number</Label>
				{telIsValid && <ErrorMsg>This field is required</ErrorMsg>}
				<Input
					onBlur={telInputBlurHandler}
					onChange={telInputChangeHandler}
					$valid={errorTel}
					id='phone'
					type='tel'
					placeholder='e.g. +1 234 567 890'
				/>
			</Box>
		</form>
	)
}
