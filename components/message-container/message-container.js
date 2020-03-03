import { LitElement, html } from 'lit-element';
import  '../just-container/just-container';
import  '../simple-message/simple-message';

export class MessageContainer extends LitElement {
  constructor() {
    super();    
    this.updates = 0;
  }
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

window.customElements.define('message-container', MessageContainer);
