import Head from 'next/head'
import { Ubuntu } from 'next/font/google'
import styled from 'styled-components'
import { HeroBg } from '@/components/Hero/HeroBg'
import { Content } from '@/components/Content/Content'
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['300', '500', '700'] })

const Main = styled.main`
	width: min(100%, 800px);
  
`

export default function Home() {
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
				<Content />
			</Main>
		</>
	)
}
