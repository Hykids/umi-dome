import { defineConfig } from "umi";
import routes from "./routes";

export default defineConfig({
  npmClient: "yarn",
  routes,
});
