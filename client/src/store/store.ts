import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { todoReducer } from "@/store/reducers/todoReducer.ts";
import { modalReducer } from "@/store/reducers/modalReducer.ts";
import { notificationReducer } from "@/store/reducers/notificationReducer.ts";

const rootReducer = combineReducers({
  todoReducer,
  modalReducer,
  notificationReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
