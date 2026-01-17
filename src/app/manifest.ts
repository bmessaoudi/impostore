import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "L'Impostore - Mystery Game",
        short_name: "Impostore",
        description: "Un gioco sociale di deduzione e investigazione.",
        start_url: "/",
        display: "standalone",
        background_color: "#1a1a1a",
        theme_color: "#d4af37",
        icons: [

            {
                src: "/web-app-manifest-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable"
            },
            {
                src: "/web-app-manifest-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable"
            }
        ],
    }
}
