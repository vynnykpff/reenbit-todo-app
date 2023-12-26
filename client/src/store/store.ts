import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { todoReducer } from "@/store/reducers/todoReducer.ts";
import { modalReducer } from "@/store/reducers/modalReducer.ts";
import { authReducer } from "@/store/reducers/authReducer.ts";
import { notificationReducer } from "@/store/reducers/notificationReducer.ts";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  todoReducer,
  modalReducer,
  notificationReducer,
  authReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
