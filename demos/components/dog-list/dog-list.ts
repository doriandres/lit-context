import { LitElement, customElement, property, html } from "lit-element";
import { consumeHttp } from "../../contexts/http-context";

@customElement("dog-list")
@consumeHttp()
export class DogList extends LitElement {
  @property({ type: Array })
  dogs: object[] = [];

  async requestData() {
    this.dogs = await this.httpGet('https://cutesdogs.org/api/v1/random-pictures');
  }

  firstUpdated() {
    this.requestData();
  }

  render() {
    return html`
      ${this.dogs.map(url => html`
        <img src=${url}/>
      `)}
    `
  }
}