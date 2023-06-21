import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

export default defineConfig({
  basePath: "/studio", // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`

  projectId: "05gboql9",
  dataset: "production",

  plugins: [deskTool()],

  schema: {
    types: schemas,
  },
});
