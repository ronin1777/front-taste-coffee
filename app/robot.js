export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/account/", "/order/"],
    },
    sitemap: "https://acme.com/sitemap.xml",
  };
}
