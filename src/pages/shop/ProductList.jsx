import { useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { apiBackend } from '../../api/apiBackend'
import Loader from '../../components/loader'
import ProductCard from '../../components/ProductCard'
import useFetch from '../../hooks/useFetch'
import { frontRoutes } from '../../routes/frontRoutes'

function ProductList() {
	const { category } = useParams()
	const { data: products, isLoading, error, getData } = useFetch(() => [])

	useEffect(() => {
		const abortController = new AbortController()
		getData(apiBackend.getProductsByCategory(category), abortController.signal)
		return () => abortController.abort()
	}, [category])

	const getProductList = () => {
		if (!products.length) return null

		const items = products.map((product, index) => (
			<ProductCard
				key={product.id}
				link={frontRoutes.navigate.shop.getProductLink(
					category,
					product.name,
					product.id
				)}
				animationDelay={`${index * 0.11}s`}
				{...product}
			/>
		))

		return (
			<div
				className={`products__list list-product ${
					!isLoading ? '--loaded' : ''
				}`}
			>
				{items}
			</div>
		)
	}

	return (
		<div className="products">
			<div className="products__container">
				<h1 className="products__title title">Продукти</h1>
				<ul className="products__nav navbar">
					<li className="navbar__item">
						<Link to={frontRoutes.navigate.shop.list} className="navbar__link">
							Магазин
						</Link>
					</li>
					<li className="navbar__item">
						<div className="navbar__link">{category}</div>
					</li>
				</ul>
				{isLoading && (
					<div className="products__loader">
						<Loader />
					</div>
				)}
				{!isLoading && !products.length && (
					<div className="info">Не знайдено жодного товару!</div>
				)}
				{getProductList()}
			</div>
		</div>
	)
}

export default ProductList
