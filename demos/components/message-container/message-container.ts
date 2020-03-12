import { LitElement, html, customElement } from 'lit-element';
import  '../just-container/just-container';
import  '../simple-message/simple-message';

@customElement('message-container')
export class MessageContainer extends LitElement {
  updates: number = 0;

  render() {
    this.updates ++;
    return html`
      Message Container Updates: ${this.updates}
      <just-container>
        <simple-message></simple-message>
      </just-container>          
    `;
  }
}