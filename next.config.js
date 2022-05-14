/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ['unsplash.com'],
	},
	i18n: { locales: ['de'], defaultLocale: 'de' },
};

module.exports = nextConfig;
