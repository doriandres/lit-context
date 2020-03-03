import { LitElement, html } from 'lit-element';
import { createContext } from './context';

export class ContextProvider extends LitElement {
  static get properties() {
    return {
      context: { type: Object },
      value: { type: Object }
    }
  }

  constructor() {
    super();    
    this.context = createContext(this.value);
  }

  render() {
    this.context.setValue(this.value);
    return html`
      <slot></slot>
    `;
  }
}
