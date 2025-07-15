import { useCallback, useState } from 'react'

const useFetch = (initValue = null) => {
	const [data, setData] = useState(initValue)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const contentType = { 'Content-Type': 'application/json' }

	const getData = useCallback(
		async (url, signal = null, method = 'GET', headers = contentType) => {
			if (!url) throw new Error('Url is empty!')

			try {
				setIsLoading(true)
				setError(null)

				const response = await fetch(url, {
					method,
					headers,
					signal,
				})

				if (!response.ok)
					throw new Error(
						`Failed to get data for the URL: ${response.url} status: ${response.status}!`
					)

				const data = await response.json()
				setData(data)
			} catch (error) {
				if (error.name !== 'AbortError') {
					setError(error.message)
					console.error(error.message)
				}
			} finally {
				setIsLoading(false)
			}
		},
		[]
	)

	const sendData = useCallback(
		async (
			url,
			body = null,
			signal,
			method = 'POST',
			headers = contentType
		) => {
			if (!url) throw new Error('Url is empty!')

			try {
				setIsLoading(true)
				setError(null)

				const response = await fetch(url, {
					method,
					headers,
					body,
					signal,
				})

				throw new Error(
					`Data sending error for the URL: ${response.url} status: ${response.status}!`
				)
			} catch (error) {
				setError(error.message)
				console.error(error.message)
			} finally {
				setIsLoading(false)
			}
		},
		[]
	)

	return { data, isLoading, error, setData, getData, sendData }
}

export default useFetch
