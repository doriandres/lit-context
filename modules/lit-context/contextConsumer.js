import { consumeContext } from "./context";

export const contextConsumer = (providerTag, consumer) => {
  let provider = null;
  let node = consumer;

  do{
    provider = node.closest(providerTag);
    node = node.getRootNode().host;
  }while(!provider && node);
  
  if(provider){
    const unsubscribe = consumeContext(provider.context, value => {
      if(!consumer.isConnected){
        unsubscribe();
      }else{
        Object.assign(consumer, value);
      }      
    });    
  }
};