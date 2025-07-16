import Page404 from '@pages/Page404'
import RulesAndPayment from '@src//pages/RulesAndPayment'
import Layout from '@src/components/Layout'
import Contacts from '@src/pages/Contacts'
import Home from '@src/pages/Home'
import Product from '@src/pages/shop/Product'
import ProductList from '@src/pages/shop/ProductList'
import ShopList from '@src/pages/shop/ShopList'
import { Route, Routes } from 'react-router'
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
					<Route index element={<ShopList />} />
					<Route
						path={frontRoutes.pages.shop.category}
						element={<ProductList />}
					/>
					<Route path={frontRoutes.pages.shop.product} element={<Product />} />
				</Route>
				<Route path="*" element={<Page404 />} />
			</Route>
		</Routes>
	)
}

export default AppRoutes
