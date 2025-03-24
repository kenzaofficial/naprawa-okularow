export const head = {
    htmlAttrs: {
        lang: 'pl'
    },
    link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        }
      ],
    meta: [
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
        },
        {
            name: "robots",
            content: "index, follow",
        },
        {
            property: 'og:image',
            content: 'https://naprawa-okularow.pl/og.jpg',
        },
        {
            property: 'og:image:width',
            content: '813',
        },
        {
            property: 'og:image:height',
            content: '579',
        },
        {
            property: 'og:title',
            content: 'Naprawa Okularów - Profesjonalna Naprawa we Wrocławiu',
        },
    ],
}