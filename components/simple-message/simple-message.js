import { LitElement, html } from 'lit-element';
import { consumeMessageContext } from '../../modules/message-context/message-consumer';

export class SimpleMessage extends LitElement {
  static get properties() {
    return {
      message: { type: String }
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
      Simple Message Updates: ${this.updates}
      <p>${this.message}</p>
    `;
  }
}

window.customElements.define('simple-message', SimpleMessage);
