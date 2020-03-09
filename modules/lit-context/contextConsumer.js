import { consumeContext } from "./context";

export const contextConsumer = (providerTag, consumer, mapFn) => {
  let provider = null;
  let node = consumer;

  do{
    provider = node.closest(providerTag);
    node = node.getRootNode().host;
  }while(!provider && node);
  
  if(provider){
    const unsubscribe = consumeContext(provider.context, (newValue, oldValue) => {
      if(!consumer.isConnected){
        unsubscribe();
      }else if(mapFn instanceof Function){
        mapFn.call(consumer, [newValue, oldValue]);
      }else{
        Object.assign(consumer, newValue);
      }
    });    
  }
};