import ReactDOM from "react-dom/client";

import { ModalComponents } from "@/components/ModalComponents.tsx";
import App from "./App.tsx";

import { Provider } from "react-redux";
import { store } from "@/store/store.ts";

import "@/styles/index.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ModalComponents />
    <App />
  </Provider>,
);
