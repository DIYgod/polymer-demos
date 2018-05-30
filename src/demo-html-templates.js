import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/polymer/lib/elements/dom-repeat.js'
import { DemoShadowDom } from './demo-shadow-dom';

class DemoHTMLTemplate extends DemoShadowDom {
    constructor() {
        super();

        this.employees = [
            {
                name: 'Blog',
                link: 'https://diygod.me'
            },
            {
                name: 'GitHub',
                link: 'https://github.com/DIYgod'
            },
        ];
    }
    static get template () {
        return html`
            <strong>Template:</strong>
            <template is="dom-repeat" items="{{employees}}">
                <p><a href="{{item.link}}">{{item.name}}</a></p>
            </template>
            <strong>Slot:</strong>
            <slot></slot>
            <strong>Super template:</strong>
            ${super.template}
        `;
      }
}

window.customElements.define('demo-html-template', DemoHTMLTemplate);
