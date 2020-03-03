import { contextConsumer } from "../lit-context/contextConsumer";

export const consumeMessageContext = consumer => contextConsumer('message-provider', consumer);