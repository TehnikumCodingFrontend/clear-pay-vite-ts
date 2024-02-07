import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { appRouter } from "./routes/router";
import "./styles/main.scss";
import { GlobalStyle } from "./theme/globalStyle";
import { theme } from "./theme/theme";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </React.StrictMode>,
)
