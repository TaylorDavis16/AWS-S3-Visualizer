import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import Explorer from "./components/Explorer";
import React from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 30000 },
  },
});

export default function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Explorer userId="James" userName="docs"/>} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
