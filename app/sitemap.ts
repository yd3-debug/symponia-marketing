import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://symponia.io';
  const updated = new Date('2026-07-08');

  return [
    { url: base, lastModified: updated, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, lastModified: updated, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/credits`, lastModified: updated, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy`, lastModified: updated, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: updated, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/refunds`, lastModified: updated, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/eula`, lastModified: updated, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
