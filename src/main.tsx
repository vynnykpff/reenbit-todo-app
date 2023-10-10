import { App } from "@/App.tsx";
import { ModalComponents } from "@/components/ModalComponents.tsx";
import { Loader } from "@/components/ui/Loader/Loader.tsx";
import Notification from "@/components/ui/Notification.tsx";
import { ThemeProvider } from "@/providers/ThemeProvider.tsx";
import { persistor, store } from "@/store/store.ts";
import "@/styles/index.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      <Notification />
      <ModalComponents />
      <PersistGate loading={<Loader />} persistor={persistor}>
        <App />
      </PersistGate>
    </ThemeProvider>
  </Provider>,
);
