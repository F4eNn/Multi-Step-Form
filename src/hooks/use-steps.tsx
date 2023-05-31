import { useState, ReactElement, useEffect } from 'react'

export const useSteps = (steps: ReactElement[], goBackToPlans: boolean) => {
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
	const goToPlans = () => {
		setCurrentStepIndex(index => {
			return (index = 1)
		})
	}
	useEffect(() => {
		if (goBackToPlans) return goToPlans()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [goBackToPlans])
	return {
		isLastStep: currentStepIndex === steps.length - 2,
		isFirstStep: currentStepIndex === 0,
		nextStep,
		backStep,
		step: steps[currentStepIndex],
		currentStepIndex,
	}
}
