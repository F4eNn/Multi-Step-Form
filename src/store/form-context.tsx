import React from "react"

export const FormContext = React.createContext({
    test1: '',
    someFunction: (isValidFirstStep: string) => {}
})