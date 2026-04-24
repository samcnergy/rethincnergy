import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";

const AI_AGENTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "CCBot",
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
  "Meta-ExternalAgent",
  "MistralAI-User",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  const sharedRule = { allow: "/", disallow: ["/api/"] };
  return {
    rules: [
      { userAgent: "*", ...sharedRule },
      ...AI_AGENTS.map((agent) => ({ userAgent: agent, ...sharedRule })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
