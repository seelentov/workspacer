import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTING } from '../config/routing.config'
import { AuthProvider } from './providers/AuthProvider'
import { Wrapper } from './providers/Wrapper'
import { Workspace } from './screens/Workspace/Workspace'
import { Header } from './ui/Header/Header'
import { Profile } from './screens/Profile/Profile'

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<AuthProvider>
					<Header />
					<Wrapper>
						<Routes>
							<Route path={ROUTING.WORKSPACE} element={<Workspace />} />
							<Route path={ROUTING.PROFILE} element={<Profile />} />
						</Routes>
					</Wrapper>
				</AuthProvider>
			</BrowserRouter>
		</>
	)
}
