const withImages = require("next-images");
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {};

// module.exports = withImages(nextConfig);
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
