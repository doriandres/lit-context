import { contextConsumer, MapFn } from "../../src/lit-context";

export const consumeMessageContext = (consumer: Element, mapFn?: MapFn) => contextConsumer('message-provider', consumer, mapFn);