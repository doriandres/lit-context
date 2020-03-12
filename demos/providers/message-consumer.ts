import { contextConsumer } from "../../src/lit-context";

export const consumeMessageContext = (consumer: Element, mapFn?: Function) => contextConsumer('message-provider', consumer, mapFn);