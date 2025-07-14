export const frontRoutes = {
	pages: {
		home: '/',
		rulesAndPayment: '/rules-and-payment',
		contacts: '/contacts',
		shop: {
			index: '/shop',
			category: ':category/products',
			product: ':id',
		},
	},
	navigate: {
		shop: {
			list: '/shop',
			getCategoryLink: category => `/shop/${category}/products`,
			getProductLink: (category, idProduct) =>
				`/shop/${category}/products/${idProduct}`,
		},
	},
}
