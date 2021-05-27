import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer, {rootSaga} from '../modules';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware(rootSaga)

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["authReducer"]
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore() {
 const store =  createStore(
  persistedReducer,
   applyMiddleware(sagaMiddleware)
 );
 let persistor = persistStore(store)
 sagaMiddleware.run(rootSaga);
 return {store, persistor}
}
