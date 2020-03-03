const contextSubscriptions = new WeakMap();

export function createContext(initialValue){
  let value = initialValue;

  const getValue = () => value;

  const setValue = (newValue) => {
    const oldValue = value;
    value = newValue;
    const subs = contextSubscriptions.get(context);
    subs.forEach(sub  => sub(newValue, oldValue));
  }
  
  const context = { getValue, setValue };

  const subs = new Set();  
  contextSubscriptions.set(context, subs);

  return context;
}

export function consumeContext(context, callback){  
  const subs = contextSubscriptions.get(context);    
  subs.add(callback);
  contextSubscriptions.set(context, subs);
  callback(context.getValue());

  return () => {
    const subs = contextSubscriptions.get(context);    
    subs.delete(callback);
    contextSubscriptions.set(context, subs);
  }
}

