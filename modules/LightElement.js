import { LitElement } from 'lit-element';
export class LightElement extends LitElement {
  createRenderRoot() {    
    return this;
  }
}