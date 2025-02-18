export const navlink = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "About",
        link: "/about"
    },

    {
        id: 3,
        name: "Services",
        link: "/service",
        submenu: [
            { id: 31, name: "Weddings Planning", link: "/services/wedding" },
            { id: 32, name: "Destination Weddings", link: "/services/destiwedding" },
            { id: 33, name: "Corporate Events", link: "/services/corpate" },
            { id: 34, name: "Birthdays & Anniversaries", link: "/services/birthday" },
            { id: 35, name: "Bridal & Baby Showers", link: "/services/bridalbaby" },
            { id: 36, name: "Concerts & Music Festivals", link: "/services/corpateandmusic" },
            { id: 37, name: "Religious Events", link: "/services/Religious" },

        ],
    },

    {
        id: 4,
        name: "Gallery",
        link: "/gallery",
        submenu: [
            { id: 41, name: "Photo Gallery", link: "/gallery/photo" },
            { id: 42, name: "Video Gallery", link: "/gallery/video" },
        ],
    },
    {
        id: 5,
        name: "Contact",
        link: "/contact"
    },
]