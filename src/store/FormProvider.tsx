import { useReducer } from 'react'
import { FormContext } from './form-context'
import { States, Actions, ActionTypes } from '@/models/types'

const initialData: States = {
	name: '',
	email: '',
	phoneNumber: '',
	firstStep: false,
}

const reducerForm = (state: States, action: Actions): any => {
	switch (action.type) {
		case ActionTypes.NAME:
			return {
				...state,
				name: action.name,
			}
		case ActionTypes.EMAIL:
			return {
				...state,
				email: action.email,
			}
		case ActionTypes.PHONE_NUMBER:
			return {
				...state,
				phoneNumber: action.phone,
			}
		case ActionTypes.FIRST_VALID:
			return {
				...state,
				firstStep: action.valid,
			}
	}
}

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatchData] = useReducer(reducerForm, initialData)
	const setNameHandler = (name: string) => {
		dispatchData({ type: ActionTypes.NAME, name })
	}
	const setEmailHandler = (email: string) => {
		dispatchData({ type: ActionTypes.EMAIL, email })
	}
	const setPhoneNumber = (phone: string) => {
		dispatchData({ type: ActionTypes.PHONE_NUMBER, phone })
	}
	const firsStepValidation = (valid: boolean) => {
		dispatchData({ type: ActionTypes.FIRST_VALID, valid })
	}

	const contextValue = {
		setName: setNameHandler,
		setEmail: setEmailHandler,
		setPhone: setPhoneNumber,
		setFirstStep: firsStepValidation,
	}

	return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
}
