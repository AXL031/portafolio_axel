import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";

// Static Next.js pages need inline hydration scripts. Keep the static rendering
// model, restrict other sources, and allow eval only for development tooling.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval' https://va.vercel-scripts.com" : ""}`,
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${isDevelopment ? " ws: wss: https://va.vercel-scripts.com" : ""}`,
  "object-src 'none'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  ...(!isDevelopment ? ["upgrade-insecure-requests"] : []),
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Only the portfolio's bundled WebP screenshots need image optimization.
    localPatterns: [{ pathname: "/portfolio-assets/**/*.webp", search: "" }],
    remotePatterns: [],
    dangerouslyAllowSVG: false,
    dangerouslyAllowLocalIP: false,
    maximumRedirects: 0,
    maximumResponseBody: 5_000_000,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
