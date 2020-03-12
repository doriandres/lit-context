import { contextConsumer } from "../lib/context-consumer";
import { LitElement } from "lit-element";

/**
 * @param { Map } changed
 */
export const consume = (providerTag: string, mapFn?: Function) => {
    const consumer = (consumer: Element, mapFn?: Function) => contextConsumer(providerTag, consumer, mapFn);

    return function<T extends { new(...args: any[]): LitElement }> (constructor: T) {
        return class extends constructor {
            connectedCallback() {
                super.connectedCallback();
                consumer(this, mapFn);
            }
        }
    }
};