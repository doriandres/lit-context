import { LitElement, html } from 'lit-element';

export class JustContainer extends LitElement {
  constructor(){
    super();
    this.updates = 0;
  }
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
