// 
import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";
import logger from "redux-logger";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

// export default configureStore({
//     reducer: persistedReducer,
//   middleware: [logger],
// });

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [logger],
})
export const persistor = persistStore(store);
