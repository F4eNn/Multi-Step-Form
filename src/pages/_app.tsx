import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
      *,
::after,
::before {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}
:root {
	--body-bgc: #eff5ff;
	--light-blue: #635aff;
	--white: #ffffff;
	--primary: #022959;
	--light-gray: #f8f9ff;
	--border-color: #d6d9e6;
	--gray: #9699aa;
	--active: #bee2fd;
	--error: #ee374a;
	--button-hover: #164a8a;
	--step-color: #bee2fd;
	--very-light-gray: #e4e5ee;
	--skye-blue: #abbcff;
	
}

body {
	height: 100svh;
	height: 100vh;
	background-color: var(--body-bgc);
	@media (min-width: 768px){
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
`

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}
