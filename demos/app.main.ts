import { LitElement, html, customElement, property } from 'lit-element';

import "./components/advanced-message/advanced-message"
import "./components/simple-message/simple-message"
import "./components/just-container/just-container"
import "./components/message-container/message-container";
import "./providers/message-provider";

@customElement('main-app')
export class MainApp extends LitElement {
    @property({ type: Number })
    counter: number = 0;

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