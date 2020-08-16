const isDev = process.env.NODE_ENV === "development";

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  refs: {
    "design-system": { 
      title: "Design System", 
      url: isDev ? "http://localhost:7008" : "https://dummy-date-storybook.vercel.app/",
    },
    "component-library": { 
      title: "Component Library", 
      url: isDev ? "http://localhost:7007" : "https://dummy-random-storybook.vercel.app/",
    }
   }
}
