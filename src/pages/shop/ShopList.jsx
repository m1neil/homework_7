import { useEffect } from 'react'
import { Link } from 'react-router'
import { apiBackend } from '../../api/apiBackend'
import Loader from '../../components/loader'
import useFetch from '../../hooks/useFetch'
import { frontRoutes } from '../../routes/frontRoutes'

function ShopList() {
	const { data: categories, isLoading, error, getData } = useFetch()

	useEffect(() => {
		const abortController = new AbortController()
		getData(apiBackend.shopList, abortController.signal)
		return () => abortController.abort()
	}, [])

	return (
		<div className="shop">
			<div className="shop__container">
				<h1 className="shop__title title">Popular Categories</h1>
				<div className="shop__body">
					{isLoading && <Loader />}
					{error && <div className="error">{error}</div>}
					{categories && (
						<div className="shop__categories categories">
							{categories.map(({ id, name, imageUrl }, index) => (
								<article
									key={id}
									className="categories__item"
									style={{ animationDelay: `${index * 0.11}s` }}
								>
									<Link
										to={frontRoutes.navigate.shop.getCategoryLink(name)}
										className="categories__link"
									>
										<div className="categories__img">
											<img
												className="ibg ibg--contain"
												src={imageUrl}
												alt="Image"
											/>
										</div>
										<h4 className="categories__title">{name}</h4>
									</Link>
								</article>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ShopList
