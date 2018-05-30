import { PolymerElement, html } from '@polymer/polymer';

export class DemoShadowDom extends PolymerElement {
    static get template () {
        return html`
            <style>
                p {
                    color: #F5712C;
                    background-color: var(--my-background);
                }
            </style>
            <p>I'm a DOM element.</p>
            <p>This is my shadow DOM!</p>
        `;
      }
}

window.customElements.define('demo-shadow-dom', DemoShadowDom);
