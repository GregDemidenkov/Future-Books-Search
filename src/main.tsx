import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { App } from '@app/App.tsx'
import { store } from '@app/store/rootStore'
import '@app/styles/reseter.scss'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
)
