"use client";

import type { QueryClientProviderProps as TanstackQueryClientProviderProps } from "@tanstack/react-query";
import { QueryClientProvider as TanstackQueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "../lib";

export interface QueryClientProviderProps
  extends Omit<TanstackQueryClientProviderProps, "client"> {}

export const QueryClientProvider = ({
  children
}: QueryClientProviderProps) => (
  <TanstackQueryClientProvider client={queryClient}>
    {children}
  </TanstackQueryClientProvider>
);
