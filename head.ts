export const head = {
    title: "Naprawa okularów",
    htmlAttrs: {
        lang: 'pl'
    },
    meta: [
        {
            name: "description",
            content:
                "Pilna Naprawa wszystkich uszkodzeń okularów. Usługi wysokiej jakości dla każdego rodzaju okularów – zapraszamy!",
        },
        {
            name: "keywords",
            content:
                "naprawa okularów Polska, naprawa okularów Poland, Serwis naprawy okularów, szybka naprawa okularów, pilna naprawa okularów",
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