import { Link } from 'react-router'

function ProductCard({ link, name, imageUrl, price, animationDelay }) {
	return (
		<article className="card-product" style={{ animationDelay }}>
			<Link to={link} className="card-product__img">
				<img className="ibg ibg--contain" src={imageUrl} alt={name} />
			</Link>
			<h4 className="card-product__title">
				<Link to={link}>{name}</Link>
			</h4>
			<div className="card-product__price">{price} грн.</div>
		</article>
	)
}

export default ProductCard
