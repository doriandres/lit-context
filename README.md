
# LitContext &middot; ![License](https://img.shields.io/badge/license-MIT-blue.svg) ![npm version](https://img.shields.io/npm/v/lit-context.svg?style=flat) ![Build Status](https://travis-ci.org/doriandres/lit-context.svg?branch=master) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

LitContext is a JavaScript library for dealing with data context with LitElement components.

## Installation

Coming soon

```bash
npm install lit-context
```

## Getting started

### Providing properties

```javascript
import { LitElement, html, customElement, property } from 'lit-element';
import { createContext } from "lit-context";

// Create a context
// Context creation will define a custom element provider with the given name <message-provider>
const { consume: consumeMessage } = createContext('message');


// Create a consumer custom element
@customElement("simple-message")
@consumeMessage()
class SimpleMessage extends LitElement {
  @property({ type: String })
  message = "";
  
  render() {
    return html`      
      <p>${this.message}</p>
    `;
  }
}

// Provide the context
@customElement("main-app")
class MainApp extends LitElement {
  get providerValue(){
    return { 
      message: `The values is ${this.counter}` 
    };
  }
  render() {    
    return html`      
      <button @click=${increase}>Add</button>
      <br/>      
      <!-- All providers have only a value property -->
      <message-provider .value=${this.providerValue}>
          <!-- All consumers under the provider (light or shadow dom) will get updates (even if they are slotted or inside another custom element) -->
          <simple-message></simple-message>
      </message-provider>
    `;
  }
}  

```


### Dependency Injection like behavior

```javascript
import { LitElement, html, customElement, property } from 'lit-element';
import { createContext } from "lit-context";

const { consume: consumeHttp } = createContext('http', {
  httpGet: async url => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
});

@customElement("some-list")
@consumeHttp()
class SomeList extends LitElement {
  @property({ type: Array })
  items = [];
  
  async loadItems(){
    this.items = this.httpGet('https://someapi.com/api/v1/items');
  }
  
  firstUpdated(){
    this.loadItems();
  }
  
  render() {
    return html`      
      <ul>
        ${this.items.map(item => html`
          <li>${item}</li>
        `)}
      </ul>
    `;
  }
}


@customElement("main-app")
class MainApp extends LitElement {
  render() {    
    return html`      
      <http-provider>
        <some-list></some-list>
      </http-provider>
    `;
  }
}

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
