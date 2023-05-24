import styled, { css } from 'styled-components'
import { ChangeEvent, useContext, useState } from 'react'
import { FormContext } from '@/store/form-context'
const Box = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	margin-top: 0.8rem;
`
const Input = styled.input`
	padding: 0.5rem 1rem;
	border-radius: 5px;
	border: 1px solid var(--border-color);
	&:focus {
		outline: 1px solid var(--light-blue);
	}
	${({ valid }: any) =>
    valid &&
    css`
      border: 1px solid rgb(0, 156, 38);

      
    `}
`
const Label = styled.label`
	color: var(--primary);
	font-size: 0.7em;
`

export const Form = () => {
	const [isName, setIsName] = useState('')
	const [isNameValid, setIsNameValid] = useState(false)

	const nameInputHandler = (e: ChangeEvent) => {
		const target = e.target as HTMLInputElement
		setIsName(target.value)
		if (target.value === '') {
			setIsNameValid(false)
			return
		}
		setIsNameValid(true)
	}

	const isNameTuched = () => {
		if (isNameValid) {
			console.log('nie ma errora')
			return
		}
		console.log('jest error')
	}

	return (
		<form>
			<Box>
				<Label htmlFor='name'>Name</Label>
				<Input
					onBlur={isNameTuched}
					onChange={nameInputHandler}
					id='name'
					type='text'
					placeholder='e.g. Stephen King'
				/>
			</Box>
			<Box>
				<Label htmlFor='email'>Email Address</Label>
				<Input
					id='email'
					type='email'
					placeholder='e.g. stephenking@lorem.com'
				/>
			</Box>
			<Box>
				<Label htmlFor='phone'>Phone Number</Label>
				<Input
					id='phone'
					type='tel'
					placeholder='e.g. +1 234 567 890'
				/>
			</Box>
		</form>
	)
}
