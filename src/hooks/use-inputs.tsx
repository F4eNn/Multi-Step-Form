import { ChangeEvent, useState } from 'react'

export const useInput = (currentValue: (value: string) => boolean) => {
	const [enteredValue, setEnteredValue] = useState('')
	const [enteredValueTouched, setEnteredValueTouched] = useState(false)

	const enteredValueIsValid = currentValue(enteredValue)
	const inputIsValid = !enteredValueIsValid && enteredValueTouched

	const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setEnteredValue(e.target.value)
	}

	const inputBlurHandler = () => {
		setEnteredValueTouched(true)
	}

	return {
		isValidInput: enteredValueIsValid,
		value: enteredValue,
		inputBlurHandler,
		inputChangeHandler,
		isError: inputIsValid,
	}
}
