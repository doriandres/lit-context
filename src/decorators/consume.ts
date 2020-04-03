/**
 * Copyright (c) 2020 Dorian Cortes, Gary Valverde
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { contextConsumer } from "../lib/context-consumer";
import { MapFn } from "../types/context";
import { LitElement } from "lit-element";

/**
 * @param providerTag Provider tag name
 * @param mapFn  Function to map provider value
 */
export const consume = <T = object>(providerTag: string, mapFn?: MapFn<T>) => {
    const consumer = (consumer: LitElement, mapFn?: MapFn<T>) => contextConsumer(providerTag, consumer, mapFn);

    return function <T extends { new(...args: any[]): LitElement }>(classConstructor: T) {
        return class extends classConstructor {
            connectedCallback() {
                super.connectedCallback();
                consumer(this, mapFn);
            }
        }
    }
};