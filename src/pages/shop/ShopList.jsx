import Loader from '@components/Loader'
import { apiBackend } from '@src/api/apiBackend'
import useFetch from '@src/hooks/useFetch'
import CategoryCard from '@src/pages/shop/components/CategoryCard'
import { frontRoutes } from '@src/routes/frontRoutes'
import { useEffect } from 'react'

function ShopList() {
	const { data: categories, isLoading, error, getData } = useFetch([])

	useEffect(() => {
		const abortController = new AbortController()
		getData(apiBackend.shopList, abortController.signal)
		return () => abortController.abort()
	}, [])

	const createCategoryList = () => {
		if (!categories.length || isLoading || error) return null

		const items = categories.map((category, index) => (
			<CategoryCard
				key={category.id}
				link={frontRoutes.navigate.shop.getCategoryLink(category.name)}
				animationDelay={`${index * 0.11}s`}
				{...category}
			/>
		))

		return <div className="shop__categories">{items}</div>
	}

	return (
		<div className="shop">
			<div className="shop__container">
				<h1 className="shop__title title">Popular Categories</h1>
				<div className="shop__body">
					{isLoading && <Loader />}
					{error && <div className="error">{error}</div>}
					{createCategoryList()}
				</div>
			</div>
		</div>
	)
}

export default ShopList
