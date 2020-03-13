import { LitElement, html, customElement, property } from 'lit-element';
import { consume } from '../../../src/lit-context';

@customElement('advanced-message')
@consume('message-provider', function({ message, increase }: Message) {
  this.mappedMessage = message;
  this.increase = increase;
})
export class AdvancedMessage extends LitElement {
  @property({ type: String })
  message: string = "";

  @property({ type: String })
  mappedMessage: string = "";

  @property({ type: Function, attribute: false })
  increase: Function;

  updates: number = 0;

  render() {
    this.updates ++;
    return html`
      Advanced Message Updates: ${this.updates}
      <button @click=${this.increase}>Increase</button>
      <p>Default ${this.message}</p>
      <p>Mapped ${this.mappedMessage}</p>
    `;
  }
}