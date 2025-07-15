import { Link } from 'react-router'

function CategoryCard({ link, name, imageUrl, animationDelay }) {
	return (
		<article
			className="category-card"
			style={{ animationDelay: animationDelay }}
		>
			<Link to={link} className="category-card__link">
				<div className="category-card__img">
					<img className="ibg ibg--contain" src={imageUrl} alt="Image" />
				</div>
				<h4 className="category-card__title">{name}</h4>
			</Link>
		</article>
	)
}

export default CategoryCard
