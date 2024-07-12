"use client";

import { Suspense } from "react";
import { SnackbarProvider } from "@/ui/shared/contexts/SnackbarProvider";
import { QueryParamProvider } from "use-query-params";
import NextAdapterApp from "next-query-params/app";
import { ThemeProvider } from "@/ui/shared/contexts/ThemeProvider";

/*
 * A wrapper of React Context Providers (https://react.dev/reference/react/useContext) that are made
 * available to the client (browser).
 */
export const ClientProviders: FCWithChildren = ({ children }) => {
  return (
    <ThemeProvider>
      <SnackbarProvider>
        <Suspense>
          <QueryParamProvider adapter={NextAdapterApp}>
            {children}
          </QueryParamProvider>
        </Suspense>
      </SnackbarProvider>
    </ThemeProvider>
  );
};
