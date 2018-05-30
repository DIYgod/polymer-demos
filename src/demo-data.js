import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/iron-input';

class DemoData extends PolymerElement {
    constructor() {
        super();
        this.owner3 = 'DIYgod3';
    }

    static get properties () {
        return {
            owner1: {
                type: String,
                value: 'DIYgod',
            },
            owner2: {
                type: String,
                value: 'DIYgod2',
            }
        };
    }
    
    static get template () {
        return html`
            <p>This is <b>[[owner1]]</b>'s element.</p>
            <p>This is <b>[[owner2]]</b>'s element.</p>
            <p>This is <b>{{owner3}}</b>'s element.</p>
            <iron-input bind-value="{{owner1}}">
                <input is="iron-input" placeholder="Your name here...">
            </iron-input>
        `;
    }
}

window.customElements.define('demo-data', DemoData);
