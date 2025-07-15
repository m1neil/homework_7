export const frontRoutes = {
	pages: {
		home: '/',
		rulesAndPayment: '/rules-and-payment',
		contacts: '/contacts',
		shop: {
			index: '/shop',
			category: 'products/:category',
			product: `products/:category/:productName/:id`,
		},
	},
	navigate: {
		shop: {
			list: '/shop',
			getCategoryLink: category => `/shop/products/${category}`,
			getProductLink: (category, name, idProduct) =>
				`/shop/products/${category}/${encodeURIComponent(name)}/${idProduct}`,
		},
	},
}
