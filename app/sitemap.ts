import type { MetadataRoute } from "next";

import { PRODUCTS } from "@/lib/products";
import { CLIENTS } from "@/lib/clients";
import { getAllArticles } from "@/lib/articles";
import { SITE_URL } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "/",
    "/about",
    "/services",
    "/products",
    "/clients",
    "/insights",
    "/faq",
    "/contact",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${SITE_URL}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const clientRoutes: MetadataRoute.Sitemap = CLIENTS.map((c) => ({
    url: `${SITE_URL}/clients/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const articleRoutes: MetadataRoute.Sitemap = getAllArticles().map((article) => ({
    url: `${SITE_URL}/insights/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...clientRoutes, ...articleRoutes];
}
