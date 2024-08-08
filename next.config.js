const { createProxyMiddleware } = require("http-proxy-middleware");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    const loaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );
    config.module.rules.push(
      { ...loaderRule, test: /\.svg$/i, resourceQuery: /url/ },
      {
        test: /\.svg$/i,
        resourceQuery: { not: /url/ },
        use: ["@svgr/webpack"],
      }
    );

    loaderRule.exclude = /\.svg$/i;

    return config;
  },

  redirects: async () => [
    {
      source: "/login/:token",
      destination: "https://www.themoviedb.org/authenticate/:token",
      permanent: false,
    },
  ],

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "image.tmdb.org", pathname: "/t/p/**" },
      { protocol: "https", hostname: "gravatar.com", pathname: "/avatar/**" },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/api/tmdb/:path*",
        destination: "https://api.themoviedb.org/3/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
