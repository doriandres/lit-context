import { LitElement, html } from 'lit-element';

import "./../advanced-message/advanced-message"
import "./../simple-message/simple-message"
import "./../just-container/just-container"

import "./../../modules/message-context/message-provider";
import '../message-container/message-container';

export class MainApp extends LitElement {
  static get properties() {
    return {
      counter: { type: Number }
    }
  }
  constructor() {
    super();
    this.counter = 0;    
  }
  render() {
    const increase = () => this.counter++;

    return html`      
      <button @click=${increase}>Add</button>
      <br/>
      <message-provider .value=${{ message: `Value: ${this.counter}`, increase }}>
          <just-container>
            <simple-message></simple-message>
            <just-container>
              <simple-message></simple-message>
              <just-container>
                <message-provider .value=${{ message: `Value: ${this.counter * 2}`, increase }}>
                  <simple-message></simple-message>
                  <message-container></message-container>
                </message-provider>            
              </just-container>
            </just-container>
            <message-container></message-container>
            <advanced-message></advanced-message>
          </just-container>    
      </message-provider>
    `;
  }
}

window.customElements.define('main-app', MainApp);
