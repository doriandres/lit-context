import { contextConsumer } from "../lib/context-consumer";

/**
 * @param { Map } changed
 */
export const consume = (providerTag: string, mapFn?: Function) => {
    const consumer = (consumer: Element, mapFn?: Function) => contextConsumer(providerTag, consumer, mapFn);

    return function<T extends { new(...args: any[]): HTMLElement }> (constructor: T) {
        return class extends constructor {
            connectedCallback() {
                super.connectedCallback();
                consumer(this, mapFn);
            }
        }
    }
};