import { createSignal, createContext } from "solid-js";

export const CounterContext = createContext();

export function CounterProvider(props) {
  const [count, setCount] = createSignal(props.count || 0),
    store = [
      count,
      setCount
    ];

  return (
    <CounterContext.Provider value={store}>
      {props.children}
    </CounterContext.Provider>
  );
}

