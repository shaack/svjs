/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-web-modules
 * License: MIT, see file 'LICENSE'
 */

export class DomUtils {

    /**
     * @deprecated use element.classList.add("className");
     */
    static addClass(element, cssClass) {
        console.warn('DomUtils.addClass is deprecated, use element.classList.add("className")')
        if (element.getAttribute("class")) {
            element.setAttribute("class", element.getAttribute("class") + " " + cssClass)
        } else {
            element.setAttribute("class", cssClass)
        }
    }

    static removeAllChildElements(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }
    }

    static isElementScrolledToBottom(element) {
        return Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 1
    }

    static getFormInputValues(formElement) {
        const inputs = formElement.querySelectorAll("input,select")
        const values = {}
        inputs.forEach((input) => {
            if (input.type === "checkbox") {
                values[input.id] = !!input.checked
            } else {
                values[input.id] = input.value
            }
        })
        return values
    }

    static isBrowserDarkMode() {
        return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }

    static browserSupportsPreferredColorScheme() {
        return window.matchMedia &&
            (window.matchMedia('(prefers-color-scheme: dark)').matches ||
                window.matchMedia('(prefers-color-scheme: light)').matches)
    }

    static loadJs(src) {
        const element = document.createElement('script')
        element.setAttribute("type", "text/javascript")
        element.setAttribute("src", src)
        document.getElementsByTagName("head")[0].appendChild(element)
    }

    static loadCss(src) {
        const element = document.createElement("link")
        element.setAttribute("rel", "stylesheet")
        element.setAttribute("type", "text/css")
        element.setAttribute("href", src)
        document.getElementsByTagName("head")[0].appendChild(element)
    }

    static setCustomProperty(name, value, element = document.documentElement) {
        element.style.setProperty("--" + name, value.trim())
    }

    static getCustomProperty(name, element = document.documentElement) {
        return getComputedStyle(element).getPropertyValue('--' + name).trim()
    }

}