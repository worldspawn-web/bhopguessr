import { defineConfig, normalizePath, type Alias, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import EnvironmentPlugin from "vite-plugin-environment";
import { resolve } from "path";

const assetsPathAlias: Alias = {
  find: "@assets",
  replacement: resolve(__dirname, "src/app/assets"),
};

interface PluginOptions {
  extensions: `.${string}`[];
  excluded?: RegExp[];
  importPath: string;
}

const injectExtensionPlugin = ({
  extensions = [],
  excluded = [],
  importPath,
}: PluginOptions): Plugin => ({
  name: "inject-scss",
  enforce: "pre",
  transform: (code, path) => {
    const normalizedPath = normalizePath(path);

    const isExcludedPath: boolean = excluded.some((file) =>
      file.test(normalizedPath),
    );

    const isAllowedExtension: boolean = extensions.some((extension) =>
      normalizedPath.endsWith(extension),
    );

    if (isAllowedExtension && !isExcludedPath) {
      return {
        code: `@import "${importPath}";\n${code}`,
        map: null,
      };
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    EnvironmentPlugin("all"),
    injectExtensionPlugin({
      extensions: [".scss"],
      importPath: "@assets/variables.scss",
      excluded: [/variables.scss$/],
    }),
  ],
  resolve: {
    alias: [assetsPathAlias],
  },
});
