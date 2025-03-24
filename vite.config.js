import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
   base: "/sleep-outside-team-14/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/index.html"),
        cart: path.resolve(__dirname, "src/cart/index.html"),
        checkout: path.resolve(__dirname, "src/checkout/index.html"),
        product: path.resolve(__dirname, "src/product_pages/index.html"),
        listing: path.resolve(__dirname, "src/product_listing/index.html"),
      },
    },
  },
});
