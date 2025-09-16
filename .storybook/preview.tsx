// .storybook/preview.tsx
import React from "react";
import type { Preview } from "@storybook/react-vite";
import "../src/card-deck/styles.css";

/**
 * Keep your existing matchers and add a theme toolbar + decorator
 */
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    docs: { inlineStories: true },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for Kreeda components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "muted", title: "Muted" },
          { value: "dark", title: "Dark" },
        ],
      },
    },
  },
};

const themeVars: Record<string, Record<string, string>> = {
  light: {},
  muted: { "--kreeda-primary": "#2b8a3e", "--kreeda-surface": "#fbfbfb" },
  dark: {
    "--kreeda-bg": "#0b1220",
    "--kreeda-surface": "#071023",
    "--kreeda-primary": "#ff5a5f",
    "--kreeda-primary-contrast": "#fff",
    "--kreeda-border": "rgba(255,255,255,0.06)",
    "--kreeda-muted": "#94a3b8",
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme || "light";
    const vars = themeVars[theme] || {};
    const style: React.CSSProperties = Object.fromEntries(
      Object.entries(vars).map(([k, v]) => [k, v])
    ) as React.CSSProperties;
    return (
      <div style={{ padding: 20, ...style } as React.CSSProperties}>
        <Story />
      </div>
    );
  },
];

export default preview;