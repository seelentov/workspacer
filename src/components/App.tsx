import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTING } from '../config/routing.config'
import { AuthProvider } from '../providers/AuthProvider'
import { Home } from './screens/Home/Home'


export const App = () => {
	return (
		<>
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route path={ROUTING.MAIN} element={<Home />} />
					</Routes>
				</AuthProvider>
			</BrowserRouter>
		</>
	)
}
