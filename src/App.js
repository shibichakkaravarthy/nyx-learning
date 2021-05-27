import './App.css';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {ThemeProvider} from 'styled-components'
import theme from './Theme';
import RootRouter from './navigation';
import createStore from './store';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const {store, persistor} = createStore();

function App() {
  return (
	<Provider store={store} >
		<PersistGate loading={null} persistor={persistor}>	
		  	<ThemeProvider theme={theme} >
				<RootRouter />
			</ThemeProvider>
			<ToastContainer
				position="top-left"
				autoClose={2500}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</PersistGate>
	</Provider>
  );
}

export default App;