import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.css'
import { Router, RouterProvider } from 'react-router'
import { router } from './routes/Routes.jsx'
import BookProvider from './context/BookContext.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BookProvider>
			<RouterProvider router={router} />
		</BookProvider>
	</StrictMode>,
)
