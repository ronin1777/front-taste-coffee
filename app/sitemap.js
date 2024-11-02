// app/sitemap.js

export default function sitemap() {
  const currentDate = new Date();
  return [
    {
      url: "https://yourwebsite.com",
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://yourwebsite.com/about",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://yourwebsite.com/contact",
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://yourwebsite.com/rules",
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
