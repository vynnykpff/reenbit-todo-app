import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { todoReducer } from "@/store/reducers/todoReducer.ts";

const rootReducer = combineReducers({
  todoReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
