import { NavLink } from 'react-router'
import { frontRoutes } from '../routes/frontRoutes'

function Header() {
	const getClassNavLink = ({ isActive }) => {
		let className = 'menu__link'
		if (isActive) className += ' menu__link--active'
		return className
	}

	return (
		<header className="header">
			<div className="header__container">
				<nav className="header__menu menu">
					<ul className="menu__list">
						<li className="menu__item">
							<NavLink to={frontRoutes.pages.home} className={getClassNavLink}>
								Головна
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink
								to={frontRoutes.pages.shop.index}
								className={getClassNavLink}
							>
								Магазин
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink
								to={frontRoutes.pages.rulesAndPayment}
								className={getClassNavLink}
							>
								Правила оплати
							</NavLink>
						</li>
						<li className="menu__item">
							<NavLink
								to={frontRoutes.pages.contacts}
								className={getClassNavLink}
							>
								Контакти
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
