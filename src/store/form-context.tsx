import React from 'react'

export const FormContext = React.createContext({
	setName: (name: string) => {},
	setEmail: (email: string) => {},
	setPhone: (phone: string) => {},
    setFirstStep: (valid: boolean) => {},
})
