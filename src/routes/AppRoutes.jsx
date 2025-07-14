import { Route, Routes } from 'react-router'
import Layout from '../components/Layout'
import Category from '../pages/Category'
import Contacts from '../pages/Contacts'
import Home from '../pages/Home'
import RulesAndPayment from '../pages/RulesAndPayment'
import Shop from '../pages/Shop'
import { frontRoutes } from './frontRoutes'

function AppRoutes() {
	return (
		<Routes>
			<Route path={frontRoutes.pages.home} element={<Layout />}>
				<Route index element={<Home />} />
				<Route
					path={frontRoutes.pages.rulesAndPayment}
					element={<RulesAndPayment />}
				/>
				<Route path={frontRoutes.pages.contacts} element={<Contacts />} />
				<Route path={frontRoutes.pages.shop.index}>
					<Route index element={<Shop />} />
					<Route
						path={frontRoutes.pages.shop.category}
						element={<Category />}
					/>
					<Route path={frontRoutes.pages.shop.product} />
				</Route>
			</Route>
		</Routes>
	)
}

export default AppRoutes
