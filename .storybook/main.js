const isDev = process.env.NODE_ENV === "development";

module.exports = {
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
