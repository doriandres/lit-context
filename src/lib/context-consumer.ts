/**
 * Copyright (c) 2020 Dorian Cortes, Gary Valverde
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { consumeContext } from "./context";
import { ContextProvider } from "./context-provider";
import { MapFn } from "../types/context";

/**
 * Context Consumer
 * @param providerTag
 * @param consumer 
 * @param mapFn 
 */
export const contextConsumer = <T = object>(providerTag: string, consumer: Element, mapFn?: MapFn<T>) => {
  let provider: ContextProvider | null = null;
  let node = consumer;

  do {
    /**
     * Find the node's closest provider tag
     */
    provider = node?.closest(providerTag);
    /**
     * Find the root node
     */
    const root: Element | ShadowRoot | null = node?.getRootNode() as ShadowRoot;
    /**
     * Set the node to the root host
     */
    node = root?.host;
  } while (!provider && node);

  /**
   * If there's a valid provider
   */
  if (provider) {
    /**
     * Register the context to be consumed
     */
    const unsubscribe = consumeContext(provider.context, (providerNewValue: T, providerOldValue: T) => {
      if (!consumer.isConnected) {
        unsubscribe();
      } else if (mapFn instanceof Function) {
        mapFn.call(consumer, providerNewValue, providerOldValue);
      } else {
        Object.assign(consumer, providerNewValue);
      }
    });
  }
};