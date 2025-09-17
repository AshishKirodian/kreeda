// .storybook/main.ts
import type { StorybookConfig } from "@storybook/react-vite";
// Optional: uncomment to use the bundle visualizer. Install with:
//   npm i -D rollup-plugin-visualizer
// import { visualizer } from "rollup-plugin-visualizer";

const splitNodeModulePackage = (id: string | undefined) => {
  if (!id) return undefined;
  const nm = "node_modules/";
  const idx = id.indexOf(nm);
  if (idx === -1) return undefined;
  const pathAfter = id.slice(idx + nm.length);
  const parts = pathAfter.split("/");
  // Scoped package -> @scope/name
  if (parts[0].startsWith("@") && parts.length > 1) {
    return `${parts[0]}/${parts[1]}`;
  }
  // normal package -> package name
  return parts[0];
};

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    config.build = config.build ?? {};
    // increase allowed chunk size to 2 MB while we iterate
    config.build.chunkSizeWarningLimit = 2000;

    // ensure rollupOptions exist
    config.build.rollupOptions = config.build.rollupOptions ?? {};
    config.build.rollupOptions.output = {
      ...(config.build.rollupOptions.output || {}),
      // manualChunks will group node_modules packages into their own chunks
      manualChunks(id: string) {
        // keep storybook packages together to avoid many tiny SB chunks
        if (id && id.includes("@storybook")) return "sb";

        // split by top-level package (react, react-dom, lodash, etc.)
        const pkg = splitNodeModulePackage(id);
        if (pkg) return pkg;

        // fallback (let Rollup decide)
        return undefined;
      },
      // optional: you can tweak other output options here (e.g. entryFileNames)
    };

    // OPTIONAL: add visualizer plugin to see a stats.html file in storybook-static/
    // If you want to enable this, uncomment the import at top and the block below,
    // and run: npm i -D rollup-plugin-visualizer
    /*
    config.build.rollupOptions.plugins = [
      ...(config.build.rollupOptions.plugins || []),
      visualizer({
        filename: "storybook-static/stats.html",
        title: "Kreeda Storybook Bundle",
        gzipSize: true,
      }),
    ];
    */

    return config;
  },
};

export default config;