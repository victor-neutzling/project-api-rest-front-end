export class View {
    constructor(selector) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error("selector doesn't exist in the DOM, please verify.");
        }
    }
    update(model) {
        let template = this.template(model);
        this.element.innerHTML += template;
    }
}
//# sourceMappingURL=View.js.map