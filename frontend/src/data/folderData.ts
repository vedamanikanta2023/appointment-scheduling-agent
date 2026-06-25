const explorerData = {
  "name": "my-project",
  "isFolder": true,
  "children": [
    {
      "name": "src",
      "isFolder": true,
      "children": [
        {
          "name": "components",
          "isFolder": true,
          "children": [
            {
              "name": "Header",
              "isFolder": true,
              "children": [
                { "name": "Header.jsx", "isFolder": false, "ext": "jsx" },
                { "name": "Header.css", "isFolder": false, "ext": "css" }
              ]
            },
            {
              "name": "Footer",
              "isFolder": true,
              "children": [
                { "name": "Footer.jsx", "isFolder": false, "ext": "jsx" },
                { "name": "Footer.css", "isFolder": false, "ext": "css" }
              ]
            },
            {
              "name": "Sidebar",
              "isFolder": true,
              "children": [
                { "name": "Sidebar.jsx", "isFolder": false, "ext": "jsx" },
                { "name": "Sidebar.css", "isFolder": false, "ext": "css" }
              ]
            }
          ]
        },
        {
          "name": "pages",
          "isFolder": true,
          "children": [
            { "name": "Home.jsx", "isFolder": false, "ext": "jsx" },
            { "name": "About.jsx", "isFolder": false, "ext": "jsx" },
            { "name": "Contact.jsx", "isFolder": false, "ext": "jsx" }
          ]
        },
        {
          "name": "hooks",
          "isFolder": true,
          "children": [
            { "name": "useFetch.js", "isFolder": false, "ext": "js" },
            { "name": "useAuth.js", "isFolder": false, "ext": "js" }
          ]
        },
        {
          "name": "utils",
          "isFolder": true,
          "children": [
            { "name": "helpers.js", "isFolder": false, "ext": "js" },
            { "name": "constants.js", "isFolder": false, "ext": "js" }
          ]
        },
        {
          "name": "assets",
          "isFolder": true,
          "children": [
            {
              "name": "images",
              "isFolder": true,
              "children": [
                { "name": "logo.png", "isFolder": false, "ext": "png" },
                { "name": "banner.jpg", "isFolder": false, "ext": "jpg" }
              ]
            },
            {
              "name": "fonts",
              "isFolder": true,
              "children": [
                { "name": "roboto.ttf", "isFolder": false, "ext": "ttf" }
              ]
            }
          ]
        },
        { "name": "App.jsx", "isFolder": false, "ext": "jsx" },
        { "name": "main.jsx", "isFolder": false, "ext": "jsx" },
        { "name": "index.css", "isFolder": false, "ext": "css" }
      ]
    },
    {
      "name": "public",
      "isFolder": true,
      "children": [
        { "name": "index.html", "isFolder": false, "ext": "html" },
        { "name": "favicon.ico", "isFolder": false, "ext": "ico" }
      ]
    },
    {
      "name": "node_modules",
      "isFolder": true,
      "children": [
        { "name": "react", "isFolder": true, "children": [] },
        { "name": "react-dom", "isFolder": true, "children": [] }
      ]
    },
    { "name": ".env", "isFolder": false, "ext": "env" },
    { "name": "package.json", "isFolder": false, "ext": "json" },
    { "name": "vite.config.js", "isFolder": false, "ext": "js" },
    { "name": ".gitignore", "isFolder": false, "ext": "gitignore" },
    { "name": "README.md", "isFolder": false, "ext": "md" }
  ]
}
export default explorerData;