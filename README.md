
# LitContext &middot; ![License](https://img.shields.io/badge/license-MIT-blue.svg) ![npm version](https://img.shields.io/npm/v/react.svg?style=flat) ![Build Status](https://travis-ci.org/doriandres/lit-context.svg?branch=master) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

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

// Consumer component example
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
customElements.define('simple-message', SimpleMessage);


// Usage example
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

customElements.define('main-app', MainApp);

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
