import page from "page"
import { Home, About, Page404, Community,Pricing, } from "../pages"

export const InitRouter = (renderApp) => {
    page('/', (ctx) => renderApp(Home, ctx.pathname))
    page('/about', (ctx) => renderApp(About, ctx.pathname))
    page('/community', (ctx) => renderApp(Community, ctx.pathname))
    page('/pricing', (ctx) => renderApp(Pricing, ctx.pathname))
    page('*', (ctx) => renderApp(Page404, ctx.pathname))

    page()
}