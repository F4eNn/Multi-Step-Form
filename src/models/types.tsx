export type States = {
	name: string
	email: string
	phoneNumber: string
	firstStep: boolean
}
export enum ActionTypes {
	NAME = 'NAME',
	EMAIL = 'EMAIL',
	PHONE_NUMBER = 'PHONE_NUMBER',
	FIRST_VALID = 'FIRST_VALID',
}
export type Actions =
	| { type: ActionTypes.NAME; name: string }
	| { type: ActionTypes.EMAIL; email: string }
	| { type: ActionTypes.PHONE_NUMBER; phone: string }
	| { type: ActionTypes.FIRST_VALID; valid: boolean }
