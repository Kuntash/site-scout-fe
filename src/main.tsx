import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import { AuthProvider } from "./providers/auth-provider";
import { queryClient } from "./queryClient";

// Creating a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const TanStackRouterDevtools =
  import.meta.env.MODE === "development"
    ? lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      )
    : () => null;

const TanStackQueryDevtools =
  import.meta.env.MODE === "development"
    ? lazy(() =>
        import("@tanstack/react-query-devtools").then((res) => ({
          default: res.ReactQueryDevtools,
        }))
      )
    : () => null;

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
          <TanStackRouterDevtools router={router} initialIsOpen={false} />
          <TanStackQueryDevtools initialIsOpen={false} />
        </AuthProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}
