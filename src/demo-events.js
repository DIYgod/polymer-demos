import { PolymerElement, html } from '@polymer/polymer';

export class DemoEvents extends PolymerElement {
    static get template () {
        return html`
            <button on-click="handleClick">Kick Me</button>
        `;
    }

    handleClick(e) {
        this.dispatchEvent(new CustomEvent('diygod', {
            detail: {
                msg: 'diygod event fired'
            }
        }));
    }
}

window.customElements.define('demo-events', DemoEvents);
