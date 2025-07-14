const BASE_URL = 'http://localhost:5000/api/'

export const apiBackend = {
	shopList: `${BASE_URL}categories`,
	getProductsByCategoryId: category =>
		`${BASE_URL}products/search?q=${category}`,
	getProductById: id => `${BASE_URL}/products/${id}`,
}
