/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://adot-technologies.com',
  generateRobotsTxt: true,
  outDir: './public',
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: ['/api'] }],
  },
  transform: async (config, path) => {
    const priorities = {
      '/': '1.0',
      '/about': '0.8',
      '/contact': '0.8',
      '/services': '0.8',
      '/products': '0.7',
      '/blog': '0.7',
      '/terms': '0.5',
      '/products/coming-soon': '0.5',
    };

    return {
      loc: `${config.siteUrl}${path}`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: priorities[path] || '0.7', // Default to 0.7 if not specified
    };
  },
};
