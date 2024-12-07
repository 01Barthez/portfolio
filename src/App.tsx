import { ToastProvider } from '@/components/ui/toast'
import { ThemeProvider } from '@/hooks/use-theme'
import Router from './router'
import { RouterProvider } from 'react-router-dom'

const App: React.FC = () => {
	return (
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<RouterProvider router={Router} />
			<ToastProvider />
		</ThemeProvider>
	)
}

export default App
