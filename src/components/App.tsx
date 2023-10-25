import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTING } from '../config/routing.config'
import { AuthProvider } from './providers/AuthProvider'
import { Wrapper } from './providers/Wrapper'
import { Profile } from './screens/Profile/Profile'
import { Tasks } from './screens/Tasks/Tasks'
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
							<Route path={ROUTING.PROFILE} element={<Profile />} />
							<Route path={ROUTING.PROFILE + ':id'} element={<Profile />} />
							<Route path={ROUTING.TASKS} element={<Tasks />} />
						</Routes>
					</Wrapper>
				</AuthProvider>
			</BrowserRouter>
		</>
	)
}
