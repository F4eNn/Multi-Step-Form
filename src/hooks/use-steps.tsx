import { useState, ReactElement } from 'react'

export const useSteps = (steps: ReactElement[]) => {
	const [currentStepIndex, setCurrentStepIndex] = useState(0)

	const nextStep = () => {
		setCurrentStepIndex(index => {
			if (index >= steps.length - 1) return index
			return index + 1
		})
	}
	const backStep = () => {
		setCurrentStepIndex(index => {
			if (index <= 0) return index
			return index - 1
		})
	}
	return {
		isLastStep: currentStepIndex === steps.length - 1,
		isFirstStep: currentStepIndex === 0,
		nextStep,
		backStep,
		step: steps[currentStepIndex],
		currentStepIndex,
	}
}
