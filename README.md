# LitContext

LitContext is a JavaScript library for dealing with data context with LitElement components.

## Installation

Coming soon

```bash
npm install lit-context
```

## Usage

```javascript

import { ContextProvider, contextConsumer } from "lit-context";
import { LitElement, html } from 'lit-element';

// Create custom provider
class MessageProvider extends ContextProvider{}
customElements.define('message-provider', MessageProvider);

// Create custom consumer
const consumeMessageContext = consumer => contextConsumer('message-provider', consumer);

// Consumer component
class SimpleMessage extends LitElement {
  static get properties() {
    return {
      message: { type: String }
    }
  }
  constructor() {
    super();
    this.message = "";        
  }
  connectedCallback(){
    super.connectedCallback();
    consumeMessageContext(this); // Start consuming the message until the component is connected
  }
  render() {
    return html`      
      <p>${this.message}</p>
    `;
  }
}
window.customElements.define('simple-message', SimpleMessage);

// Provider component
class MainApp extends LitElement {
  static get properties() {
    return {
      counter: { type: Number }
    }
  }
  
  constructor() {
    super();
    this.counter = 0;        
  }
  
  get providerValue(){
   return { message: `Value: ${this.counter}` };
  }
  
  increase = () => this.counter++;
  
  render() {    
    return html`      
      <button @click=${increase}>Add</button>
      <br/>
      <message-provider .value=${this.providerValue}>
          <simple-message></simple-message>
      </message-provider>
    `;
  }
}
window.customElements.define('main-app', MainApp);

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
