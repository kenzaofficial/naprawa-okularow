export const head = {
    title: "Naprawa Okularów",
    htmlAttrs: {
        lang: 'pl'
    },
    meta: [
        {
            name: "description",
            content:
                "Pilna Naprawa WSZYSTKICH uszkodzeń okularów. Szybko naprawiamy w całej Polsce – zapraszamy!",
        },
        {
            name: "keywords",
            content:
                "naprawa okularów Polska, naprawa okularów Poland, naprawa okularow Wroclaw, Serwis naprawy okularów, szybka naprawa okularów, pilna naprawa okularów",
        },
        {
            name: "author",
            content: "Naprawa okularów",
        },
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
        },
        {
            "http-equiv": "Content-Language",
            content: "pl",
        },
        {
            name: "robots",
            content: "index, follow",
        },
    ],
    script: [
        {
            src: "https://www.googletagmanager.com/gtag/js?id=G-Z3G3WFL0G4",
            async: true,
        },
        {
            children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z3G3WFL0G4');
          `,
            type: "text/javascript",
        },
    ],
}