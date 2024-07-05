import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

// this export is for fixing:
// Failed to simulate callback for file. Is your webhook configured correctly?
// Which only happens in development
export const runtime = "nodejs";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
