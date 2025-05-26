import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Esse Site Cheio de Tech',
    short_name: 'Tech2025',
    description: 'Site do Tech',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    id: '/',
    icons: [
      {
        "src": "/icons/manifest-icon-192.maskable.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/icons/manifest-icon-192.maskable.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/icons/manifest-icon-512.maskable.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/icons/manifest-icon-512.maskable.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ],
    screenshots: [
      {
        "src": "/screenshots/screen1.png",
        "sizes": "1920x912",
        "type": "image/png",
        "form_factor": "wide"
      },
      {
        "src": "/screenshots/screen2.png",
        "sizes": "515x908",
        "type": "image/png",
        "form_factor": "narrow"
      },
    ]
  }
}