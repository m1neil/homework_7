const BASE_URL = 'http://localhost:5000/api/'

export const apiBackend = {
	shopList: `${BASE_URL}categories`,
	getProductsByCategory: category =>
		`${BASE_URL}products/search?q=${encodeURIComponent(category)}`,
	getProductById: id => `${BASE_URL}product/${id}`,
}
