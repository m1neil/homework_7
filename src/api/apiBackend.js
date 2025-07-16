const BASE_URL = 'https://localhost:7092/'

export const apiBackend = {
	shopList: `${BASE_URL}GetAllCategories`,
	getProductsByCategory: category =>
		`${BASE_URL}GetProductByCategory/${encodeURIComponent(category)}`,
	getProductById: id => `${BASE_URL}GetProductById/${id}`,
}
