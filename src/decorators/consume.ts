/**
 * Copyright (c) 2020 Dorian Cortes, Gary Valverde
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { contextConsumer } from "../lib/context-consumer";

/**
 * @param providerTag Provider tag name
 * @param mapFn  Function to map provider value
 */
export const consume = (providerTag: string, mapFn?: (instance: HTMLElement, providerNewValue: any, providerOldValue: any) => void) => {
    const consumer = (consumer: HTMLElement, mapFn?: Function) => contextConsumer(providerTag, consumer, mapFn);

    return function <T extends { new(...args: any[]): HTMLElement }>(constructor: T) {
        return class extends constructor {
            connectedCallback() {
                super.connectedCallback();
                consumer(this, mapFn);
            }
        }
    }
};