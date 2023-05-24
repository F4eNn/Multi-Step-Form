import { FormContext } from './form-context'
export const FormProvider = ({ children }: { children: React.ReactNode }) => {  

    

    const checkValidity =  (getData:string) => {
        console.log(getData)
    }





    const contextValue = {
        test1: 'hej',
        someFunction: checkValidity
    }


	return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
}
