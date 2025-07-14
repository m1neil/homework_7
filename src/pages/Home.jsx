function Home() {
	return (
		<section className="home">
			<div className="home__container">
				<h1 className="home__title title">
					Цей магазин належить програмісту на фрілансі
				</h1>
				<div className="home__label">Тому:</div>
				<ul className="home__list list-home">
					<li className="list-home__item">Магазин працює коли хоче</li>
					<li className="list-home__item">Товари надсилає швидко</li>
					<li className="list-home__item">
						На запитання відповідає коли висипається
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Home
