import { createContext } from "../../src/lit-context";

export const {
  getTagName: getHttpTagName,
  consume: consumeHttp,
  consumer: httpConsumer
} = createContext('http', {
  httpGet: async (url: string): Promise<object> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
});