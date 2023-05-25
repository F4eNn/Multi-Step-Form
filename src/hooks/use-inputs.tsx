import { ChangeEvent, useState } from 'react'

export const useInput = (currentValue: (value: string) => boolean) => {
	const [enteredValue, setEnteredValue] = useState('')
	const [enteredValueTouched, setEnteredValueTouched] = useState(false)

	const enteredValueIsValid = currentValue(enteredValue)
	const inputIsValid = !enteredValueIsValid && enteredValueTouched

	const inputChangeHandler = (e: ChangeEvent) => {
		const target = e.target as HTMLInputElement
		setEnteredValue(target.value)
	}

	const inputBlurHandler = () => {
		setEnteredValueTouched(true)
	}

	return {
		inputBlurHandler,
		inputChangeHandler,
		isError: inputIsValid,
	}
}
