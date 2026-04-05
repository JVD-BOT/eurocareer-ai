import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eurocareerai.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-04-05"),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/german-cv-format`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/netherlands-job-search`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/eu-vs-us-resume`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/netherlands-cv-format`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/france-cv-format`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/sweden-cv-format`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/uk-cv-format`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/spain-cv-format`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/best-job-boards-europe`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/austria-cv-format`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/belgium-cv-format`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/cover-letter-europe`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/denmark-cv-format`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/eu-work-visa-guide`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/ireland-cv-format`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/italy-cv-format`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/switzerland-cv-format`,
      lastModified: new Date("2026-04-05"),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
