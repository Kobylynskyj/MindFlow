import page from "page"
import { Home, About, Page404 } from "../pages"

export const InitRouter = (renderApp) => {
    page('/', (ctx) => renderApp(Home, ctx.pathname))
    page('/about', (ctx) => renderApp(About, ctx.pathname))
    page('*', (ctx) => renderApp(Page404, ctx.pathname))

    page()
}