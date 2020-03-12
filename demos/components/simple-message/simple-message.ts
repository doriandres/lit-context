import { LitElement, html, property, customElement } from 'lit-element';
import { consumeMessageContext } from '../../providers/message-consumer';

@customElement('simple-message')
export class SimpleMessage extends LitElement {
  @property({ type: String })
  message: string = "";

  updates: number = 0;

  connectedCallback(){
    super.connectedCallback();
    consumeMessageContext(this);
  }

  render() {
    this.updates++;
    return html`
      Simple Message Updates: ${this.updates}
      <p>${this.message}</p>
    `;
  }
}