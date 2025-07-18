import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './components/App'
import './styles/index.scss'

createRoot(document.getElementById('root')).render(
	// <StrictMode>
	<BrowserRouter>
		<App />
	</BrowserRouter>
	// </StrictMode>
)
