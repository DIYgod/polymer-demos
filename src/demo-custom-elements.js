import { PolymerElement } from '@polymer/polymer';

class DemoCustomElements extends PolymerElement {
    constructor() {
        super();
        this.textContent = `I'm a custom element.`;
    }
}

window.customElements.define('demo-custom-elements', DemoCustomElements);
