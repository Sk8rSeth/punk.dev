import { defineConfig } from "tinacms";

export default defineConfig({
  // Enable local mode for self-hosting
  localMode: true,
  
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "src/content/blog",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "product",
        label: "Products",
        path: "src/content/products",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "price",
            label: "Price",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image",
          },
          {
            type: "string",
            name: "shopifyLink",
            label: "Shopify Product URL",
            description: "The URL to the product on your Shopify store",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Description",
            isBody: true,
          },
        ],
      },
      {
        name: "branch",
        label: "Branches",
        path: "src/content/branches",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
        ],
      },
      {
        name: "siteConfig",
        label: "Site Configuration",
        path: "src/content/config",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "mailchimp",
            label: "Mailchimp Settings",
            fields: [
              {
                type: "string",
                name: "signupUrl",
                label: "Signup Form URL",
                description: "Your Mailchimp form action URL",
              },
            ],
          },
          {
            type: "object",
            name: "shopify",
            label: "Shopify Settings",
            fields: [
              {
                type: "string",
                name: "storeUrl",
                label: "Store URL",
                description: "Your Shopify store URL",
              },
            ],
          },
        ],
      },
    ],
  },
});