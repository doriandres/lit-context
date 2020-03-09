import { contextConsumer } from "../lit-context/contextConsumer";

export const consumeMessageContext = (consumer, mapFn) => contextConsumer('message-provider', consumer, mapFn);