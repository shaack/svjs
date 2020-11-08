/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-web-modules
 * License: MIT, see file 'LICENSE'
 */

const additionalAttributes = "Path=/; SameSite=Strict;"

export class Cookie {

    static write(name, value = "", maxAge = undefined) {
        let maxAgeAttribute = ""
        if (maxAge !== undefined) {
            maxAgeAttribute = "Max-Age=" + maxAge + "; "
        }
        const content = name + "=" + value + "; " + maxAgeAttribute + additionalAttributes
        console.log("write", content)
        document.cookie = content
    }

    static read(name) {
        const cookieAttributes = document.cookie.split(";")
        for (const cookieAttribute of cookieAttributes) {
            const cookieAttributeTrimmed = cookieAttribute.trim()
            const nameEquals = name + "="
            if (cookieAttributeTrimmed.indexOf(nameEquals) !== -1) {
                return cookieAttributeTrimmed.substr(nameEquals.length)
            }
        }
        return undefined
    }

    static delete(name) {
        this.write(name, "", 0)
    }

}