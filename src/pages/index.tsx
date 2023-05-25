import Head from 'next/head'
import { Ubuntu } from 'next/font/google'
import styled from 'styled-components'
import { HeroBg } from '@/components/Hero/HeroBg'
import { Content } from '@/components/Content/Content'
import { useSteps } from '@/hooks/use-steps'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['300', '500', '700'] })

const Main = styled.main`
	width: min(100%, 800px);
`

export default function Home() {
	const arrayTest = [<div key={'one'}>one</div>, <div key={'two'}>two</div>, <div key={'three'}>thre</div>, <div key={'four'}>four</div>]

	const { nextStep, backStep, currentStepIndex, step} = useSteps(arrayTest)
	return (
		<>
			<Head>
				<title>Form</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<Main className={ubuntu.className}>
				<HeroBg />
				<Content renderStep={step} nextStepHandler={nextStep} backStepHandler={backStep}/>
			</Main>
		</>
	)
}
