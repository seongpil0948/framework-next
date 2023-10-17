"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ReduxProvider } from "../store";
import { LoadingProvider } from "./modal";
import { ToastContainer } from "react-toastify";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const { theme } = useTheme();
  return (
    <NextUIProvider>
      <NextThemesProvider {...themeProps}>
        <ReduxProvider>
          <LoadingProvider>
            {children}
            <ToastContainer
              position="bottom-right"
              autoClose={false}
              pauseOnHover={false}
              hideProgressBar={false}
              theme={theme === "dark" ? "dark" : "light"}
              newestOnTop={false}
              rtl={false}
            />
          </LoadingProvider>
        </ReduxProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
