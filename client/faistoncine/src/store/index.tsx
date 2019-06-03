/**
 * Configure store
 */
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import reduxThunk from 'redux-thunk'
/** Defaults storage to localStorage for web and AsyncStorage for react-native */
import storage from 'redux-persist/lib/storage'
/** Store of the application (reducers) */
import reducers from './reducers.store'

const config = {
    key: "root",
    storage,
}

const pReducer = persistReducer(config, reducers)

/** 
 * Create an object (Store) that holds the complete state of your app.
 * Reducing function : returns the next state tree
 * Initial state : default
 * Store enhancer function : for add third-party capabilities (middleware, persistence...)
 */
export const store = createStore(pReducer, {}, applyMiddleware(reduxThunk))
export const persistor = persistStore(store)