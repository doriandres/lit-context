import { LitElement, html, customElement, property } from 'lit-element';
import { consumeMessageContext } from '../../providers/message-consumer';

@customElement('advanced-message')
export class AdvancedMessage extends LitElement {
  @property({ type: String })
  message: string = "";

  @property({ type: Function, attribute: false })
  increase: Function;

  updates: number = 0;

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