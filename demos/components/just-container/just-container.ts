
import { LitElement, html } from 'lit-element';

export class JustContainer extends LitElement {
  updates: number = 0;
  
  render() {
    this.updates ++;
    return html`
      Just Container Updates: ${this.updates}
      <div>
        <slot></slot>
      </div>
    `;
  }
}

window.customElements.define('just-container', JustContainer);
