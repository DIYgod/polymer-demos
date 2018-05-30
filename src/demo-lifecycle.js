import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/polymer/lib/elements/dom-repeat.js'

class DemoLifecycle extends PolymerElement {
    constructor() {
        super();
        this.textContent = `I'm demo-lifecycle element.`;
        console.log('demo-lifecycle element constructor');
    }

    static get properties () {
        return {
            owner: {
                type: String,
                value: 'DIYgod',
            },
        };
    }

    connectedCallback () {
        super.connectedCallback();
        console.log('demo-lifecycle element connectedCallback');
    }

    disconnectedCallback () {
        super.disconnectedCallback();
        console.log('demo-lifecycle element disconnectedCallback');
    }

    ready () {
        super.ready();
        console.log('demo-lifecycle element ready');
    }

    attributeChangedCallback () {
        super.attributeChangedCallback();
        console.log('demo-lifecycle element attributeChangedCallback');
    }
}

window.customElements.define('demo-lifecycle', DemoLifecycle);
