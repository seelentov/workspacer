import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTING } from '../config/routing.config'
import { AuthProvider } from './providers/AuthProvider'
import { Wrapper } from './providers/Wrapper'
import { Workspace } from './screens/Workspace/Workspace'
import { Header } from './ui/Header/Header'

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<AuthProvider>
					<Header />
					<Wrapper>
						<Routes>
							<Route path={ROUTING.WORKSPACE} element={<Workspace />} />
						</Routes>
					</Wrapper>
				</AuthProvider>
			</BrowserRouter>
		</>
	)
}
