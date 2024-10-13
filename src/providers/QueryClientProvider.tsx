"use client";

import { queryClient } from "../lib";
import type { QueryClientProviderProps as TanstackQueryClientProviderProps } from "@tanstack/react-query";
import { QueryClientProvider as TanstackQueryClientProvider } from "@tanstack/react-query";

export type QueryClientProviderProps = Omit<
  TanstackQueryClientProviderProps,
  "client"
>;

export const QueryClientProvider = ({ children }: QueryClientProviderProps) => (
  <TanstackQueryClientProvider client={queryClient}>
    {children}
  </TanstackQueryClientProvider>
);
