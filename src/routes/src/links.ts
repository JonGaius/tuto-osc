import { AboutPage, ContactPage, ErrorPage, HomePage } from "../../views/pages"

export const links = {
    home: "/",
    about: "/a-propos",
    contact: "/contact",
    error: "/*",
}

export const routes = [
    {
        path: links.home,
        Component: HomePage,
    },
    {
        path: links.about,
        Component: AboutPage
    },
    {
        path: links.contact,
        Component: ContactPage
    },
    {
        path: links.error,
        Component: ErrorPage
    },
]