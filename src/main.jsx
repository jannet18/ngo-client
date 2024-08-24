import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import AppContext from "./contexts/AppContext.jsx";
import { Windmill } from "@windmill/react-ui";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AppContext>
          <Windmill>
            <App />
          </Windmill>
        </AppContext>
      </QueryClientProvider>
    </React.StrictMode>
  </BrowserRouter>
);
