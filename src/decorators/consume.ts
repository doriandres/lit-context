/**
 * Copyright (c) 2020 Dorian Cortes, Gary Valverde
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { contextConsumer } from "../lib/context-consumer";
import { MapFn } from "../types/context";

/**
 * @param providerTag Provider tag name
 * @param mapFn  Function to map provider value
 */
export const consume = (providerTag: string, mapFn?: MapFn) => {
    const consumer = (consumer: HTMLElement, mapFn?: MapFn) => contextConsumer(providerTag, consumer, mapFn);

    return function <T extends { new(...args: any[]): HTMLElement }>(constructor: T) {
        return class extends constructor {
            connectedCallback() {
                super.connectedCallback();
                consumer(this, mapFn);
            }
        }
    }
};