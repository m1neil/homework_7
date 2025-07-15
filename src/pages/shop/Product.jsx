import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { apiBackend } from '../../api/apiBackend'
import Loader from '../../components/loader'
import useFetch from '../../hooks/useFetch'
import { frontRoutes } from '../../routes/frontRoutes'

function Product() {
	const { id, category, productName } = useParams()
	const { data: product, isLoading, error, getData } = useFetch(null)
	const navigate = useNavigate()

	useEffect(() => {
		const abortController = new AbortController()
		getData(apiBackend.getProductById(id), abortController.signal)
		return () => abortController.abort()
	}, [id])

	useEffect(() => {
		if (error) navigate(frontRoutes.navigate.shop.getCategoryLink(category))
	}, [error])

	const FixedValue = value => {
		const regExt = /\d+[.,]\d+/
		return regExt.test(value.toString()) ? value.toFixed(2) : value
	}

	return (
		<div className={`product ${!isLoading ? '--loaded' : ''}`}>
			<div className="product__container">
				<ul className="product__nav navbar">
					<li className="navbar__item">
						<Link to={frontRoutes.navigate.shop.list} className="navbar__link">
							Магазин
						</Link>
					</li>
					<li className="navbar__item">
						<Link
							to={frontRoutes.navigate.shop.getCategoryLink(category)}
							className="navbar__link"
						>
							{category}
						</Link>
					</li>
					<li className="navbar__item">
						<div className="navbar__link">{productName}</div>
					</li>
				</ul>
				{isLoading && (
					<div className="product__loader">
						<Loader />
					</div>
				)}
				{!isLoading && product && (
					<div className="product__body">
						<h1 className="product__title title">{product.name}</h1>
						<div className="product__img">
							<img
								className="ibg ibg--contain"
								src={product.imageUrl}
								alt={product.name}
							/>
						</div>
						<div className="product__price">
							Ціна: {FixedValue(product.price)} грн.
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Product
