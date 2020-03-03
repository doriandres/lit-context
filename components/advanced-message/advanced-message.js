import { LitElement, html } from 'lit-element';
import { consumeMessageContext } from '../../modules/message-context/message-consumer';

export class AdvancedMessage extends LitElement {
  static get properties() {
    return {
      message: { type: String },
      increase: { type: Function, attribute: false }
    }
  }
  constructor() {
    super();
    this.message = "";
    this.updates = 0;
  }

  connectedCallback(){
    super.connectedCallback();
    consumeMessageContext(this);
  }

  render() {
    this.updates ++;
    return html`
      Advanced Message Updates: ${this.updates}
      <button @click=${this.increase}>Increase</button>
      <p>${this.message}</p>
    `;
  }
}

window.customElements.define('advanced-message', AdvancedMessage);
