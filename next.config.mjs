/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Prevent browsers from MIME-sniffing the content type
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Block clickjacking in legacy browsers (frame-ancestors in CSP covers modern ones)
  { key: "X-Frame-Options", value: "DENY" },
  // Reduce referrer leakage on cross-origin navigations
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable unused browser features
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Force HTTPS for 1 year (preload-eligible)
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // Content Security Policy
  // - script-src: 'unsafe-inline' required for JSON-LD inline <script> tags
  // - style-src: 'unsafe-inline' required for Tailwind/Framer Motion inline styles
  // - frame-ancestors 'none': disallow embedding in any frame
  // - form-action 'self': only allow form submissions to our own origin
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "base-uri 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async headers() {
    return [
      {
        // Apply security headers to every route
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Products → Projects (permanent 301)
      { source: "/products", destination: "/projects", permanent: true },
      { source: "/products/alohelp", destination: "/projects/alohelp", permanent: true },
      { source: "/products/braingritiva", destination: "/gritiva", permanent: true },
      { source: "/products/sitemarketing", destination: "/projects/ai-search-optimization", permanent: true },
      { source: "/products/powerfulblueprints", destination: "/projects/ai-search-optimization", permanent: true },
      // Clients → Services (permanent 301)
      { source: "/clients", destination: "/services", permanent: true },
      { source: "/clients/:path*", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
