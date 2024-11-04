import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "src/app/App";
import { store } from "src/app/store";
import "src/index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
