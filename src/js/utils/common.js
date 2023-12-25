import { loadState } from './state.js'
import { footer } from './footer.js'
import { navbar } from './navbar.js'
import { themeButton } from './themeButton.js'
import { cookiesPermission } from './cookiesPermission.js'

export const common = () => {
    loadState()
    footer()
    navbar()
    themeButton()
    cookiesPermission()
}