import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cart: resolve(__dirname, "cart/index.html"),
        product: resolve(__dirname, "product_pages/index.html"),
        listing: resolve(__dirname, "product-listing/index.html"),
        checkout: resolve(__dirname, "checkout/index.html"),
      },
    },
  },
});
