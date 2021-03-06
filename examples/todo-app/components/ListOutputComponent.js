/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/cm-web-modules
 * License: MIT, see file 'LICENSE'
 */

import {Component} from "../../../src/cm-web-modules/app/Component.js"
import {Observe} from "../../../src/cm-web-modules/observe/Observe.js";
import {EventUtils} from "../../../src/cm-web-modules/utils/EventUtils.js";

export class ListOutputComponent extends Component {
    constructor(parent, element) {
        super(parent, element)
        this.element = element
        this.actions = {
            "check": (event) => {
                for (const todo of this.parent.state.todos) {
                    if (todo.id === parseInt(event.target.dataset.id, 10)) {
                        todo.done = event.target.checked
                        break
                    }
                }
            }
        }
        EventUtils.delegate(element, "change", "input[type='checkbox']", (event) => {
            this.actions.check(event)
        })
        Observe.property(this.parent.state, "todos", () => {
            let html = ""
            for (const value of this.parent.state.todos) {
                html += `<li><label><input data-id="${value.id}" type="checkbox" ${(value.done ? "checked" : "")} />${value.text}</label></li>`
            }
            this.element.innerHTML = html
        })
    }
}