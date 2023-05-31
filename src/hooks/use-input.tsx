import { useState } from 'react'

export const useInput = (
	inputName: string,
	checkValidity: boolean,
	updateFields: (arg0: { [x: string]: string }) => void
) => {
	const [isInputValid, setInputValid] = useState(false)

	const inputValidity = checkValidity

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValid(false)

		updateFields({ [`${inputName}`]: e.target.value })
	}
	const onBlurInput = () => {
		if (!inputValidity) {
			setInputValid(true)
		}
	}

	return {
		inputValidity,
		onChangeInput,
		onBlurInput,
		isError: isInputValid,
	}
}
