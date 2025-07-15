// const BASE_URL = 'http://localhost:5000/api/'
const BASE_URL = 'https://startling-scone-bb8cf3.netlify.app/'

export const apiBackend = {
	shopList: `${BASE_URL}categories`,
	getProductsByCategory: category =>
		`${BASE_URL}products/search?q=${encodeURIComponent(category)}`,
	getProductById: id => `${BASE_URL}product/${id}`,
}
