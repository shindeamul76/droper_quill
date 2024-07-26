// import { createNextRouteHandler } from "uploadthing/next";
 
import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";
// import { createRouteHandler } from "uploadthing/server";
 
// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});